<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\Repositories\BrandRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $product;
    private $category;
    private $brand;
    public function __construct(ProductRepository $product, CategoryRepository $category, BrandRepository $brand)
    {
        $this->product = $product;
        $this->category = $category;
        $this->brand = $brand;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['title'] = trans('Danh sách sản phẩm');
        $data['productCategories'] = $this->category->filters();
        return view('admin.product.index', $data);
    }

    public function getData(Request $request)
    {
        $status = cleanNumber($request->input('status'));
        $categoryId = cleanNumber($request->input('category'));
        $products = $this->product->filters([
            'relations' => ['category'],
            'status' => $status,
            'categoryId' => $categoryId,
            'sort' => ['id', 'desc'],
        ]);
        $data['products'] = $products;
        $data['htmlProductTable'] = view('admin.product.product_table', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        $data['title'] = trans('Thêm sản phẩm mới');
        $data['categories'] = $this->category->filters([
            'status' => true,
        ]);
        $data['brands'] = $this->brand->filters([
            'status' => true,
        ]);
        $data['tags'] = Tag::orderBy('name', 'asc')->get(['id', 'name']);
        return view('admin.product.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $rules = [
                'product_name' => 'required|string|max:191|unique:products',
                'summary' => 'max:255|string|nullable',
                'description' => 'max:16000',
                'avatar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
                'price' => 'required',
                'quantity' => 'required|numeric',
                'sku' => 'nullable|string|max:191',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $tags = $request->input('tags');

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $img = UploadFile::saveImage($file, 'products/thumbs');
                $request->merge(['avatar_url' => $img]);
            }
            $product = $this->product->addProduct($request);
            $this->product->addTag($product, $tags);
            $images = $request->input('medias');
            $imagePaths = UploadFile::moveImagesToCloud($images, 'products/' . $product->product_name);
            $this->product->addMediaProduct($product, $imagePaths);
            if ($product) \Illuminate\Support\Facades\Log::info('Admin has created a product: ' . $product->toJson());
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id)
    {
        $id = intval(cleanInput($id));
        $data['title'] = trans('Cập nhật sản phẩm');
        $product = $this->product->filters([
            'productId' => $id,
            'relations' => ['category', 'tags', 'medias'],
        ]);
        $data['product'] = $product;
        $data['productTags'] = $product->tags->pluck('id')->toArray();
        $data['brands'] = $this->brand->filters(['active' => true]);
        $data['tags'] = Tag::orderBy('name', 'asc')->get(['id', 'name']);
        $data['categories'] = $this->category->filters(['active' => true]);
        return view('admin.product.update', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function update(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $id = intval($request->input('id'));
            $rules = [
                'product_name' => 'required|string|max:191|unique:products,product_name,' . $id,
                'summary' => 'max:255|string|nullable',
                'description' => 'max:10000',
                'avatar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
                'price' => 'required',
                'quantity' => 'required|numeric',
                'sku' => 'nullable|string|max:191',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $tags = $request->input('tags');
            $currentImages = $request->input('current_images');

            $product = $this->product->find($id);
            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $img = UploadFile::saveImage($file, 'products/thumbs');
                $request->merge(['avatar_url' => $img]);
                if (isset($product->thumb)) {
                    UploadFile::removeImage($product->thumb);
                }
            }
            $isUpdate = $this->product->updateProduct($request, $product);
            $this->product->addTag($product, $tags);
            $images = $request->input('medias');
            $imagePaths = UploadFile::moveImagesToCloud($images, 'products/' . $product->product_name);
            $this->product->updateMediaProduct($product, $imagePaths, $currentImages);
            if ($isUpdate) \Illuminate\Support\Facades\Log::info('Admin has updated a product: ' . $product->toJson());
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $id = intval(cleanInput($request->input('id')));
            if (isset($id)) {
                $product = $this->product->deleteProduct($id);
                $this->product->updateMediaProduct($product, []);
            }
            DB::connection()->commit();
            if ($product) \Illuminate\Support\Facades\Log::info('Admin has deleted a product: ' . $product->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function createTag(Request $request)
    {
        try {
            $rules = [
                'name' => 'required|string|min:1|max:100|unique:tags',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $name = cleanInput($request->input('name'));
            if (!empty($name)) {
                $tag = $this->product->createTag($name);
                if ($tag) \Illuminate\Support\Facades\Log::info('Admin has created a tag: ' . $tag->toJson());
            }
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function searchProduct(Request $request)
    {
        try {
            $text = $request->input('keyword');
            $text = trim(strip_tags(stripslashes($text['term'])));
            $optionIds = cleanInput($request->input('optionIds'));
            $products = $this->product->searchProduct($text);
            $products = $products->map(function ($product) use ($optionIds) {
                return [
                    'text' => $product->product_name . ' (' . $product->category->name . ')',
                    'children' => $product->variations->map(function ($item) use ($product, $optionIds) {
                        return [
                            'id' => $item->id,
                            'productId' => $product->id,
                            'text' => $item->name,
                            'textSelected' => $product->product_name . ' - ' . $item->name,
                            'quantity' => $item->quantity,
                            'disabled' => in_array($item->id, $optionIds),
                        ];
                    })->all(),
                ];
            })->values()->all();
            $data['products'] = $products;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success', $data);
    }

    public function syncProductAjax(Request $request)
    {
        $productId = cleanInput($request->input('productId'));
        $variationId = cleanInput($request->input('variationId'));
        if (empty($productId)) return $this->iRespond(true, "", []);
        $product = $this->product->filters([
            'status' => true,
            'productId' => $productId,
            'relations' => ['taxes', 'variations'],
        ]);
        $data['product'] = $product->variations->keyBy('id');
        $data['taxes'] = $product->taxes->isNotEmpty() ? $product->taxes : [];
        return $this->iRespond(true, "", $data);
    }

    public function uploadFiles(Request $request)
    {
        try {
            $rules = [
                'files.*' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $temporaryFolder = 'temp';
            $imagePaths = [];

            foreach ($request->file('files') as $image) {
                $imageName = time() . '_' . trim($image->getClientOriginalName());
                $image->storeAs($temporaryFolder, $imageName);
                $imagePaths[] = $temporaryFolder . '/' . $imageName;
            }
            $uploadedFiles = session('uploaded_files', []);
            $uploadedFiles[] = $imagePaths;
            session(['uploaded_files' => $uploadedFiles]);
            return $this->iRespond(true, "", $imagePaths);
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
    }
}
