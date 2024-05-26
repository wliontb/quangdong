<?php

namespace App\Http\Controllers\Client;

use App\Enums\ActiveStatus;
use App\Enums\StatusOrder;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Product;
use App\Models\Promotion;
use App\Repositories\BrandRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\OrderRepository;
use App\Repositories\ProductRepository;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Zxing\QrReader;

class HomeController extends Controller
{
    private $productRp;
    private $categoryRp;
    private $brandRp;
    private $orderRp;
    public function __construct(ProductRepository $productRp, CategoryRepository $categoryRp, BrandRepository $brandRp, OrderRepository $orderRp)
    {
        $this->productRp = $productRp;
        $this->categoryRp = $categoryRp;
        $this->brandRp = $brandRp;
        $this->orderRp = $orderRp;
    }

    public function index()
    {
        $data['title'] = trans('Trang chủ');
        $data['promotions'] = Promotion::select('thumb', 'name', 'status')->where('status', 1)->get();
        $data['productCats'] = $this->categoryRp->filters([
            'status' => true,
            'limitPost' => 50,
            'limit' => 6,
            'orderBy' => ['id', 'asc'],
        ]);
        $data['brands'] = $this->brandRp->filters([
            'status' => ActiveStatus::Active,
        ]);
        $products = $this->productRp->filters([
            'relation' => ['medias', 'promotions'],
            'status' => 1,
            'perPage' => 12,
        ]);
        $data['products'] = $products;
        return view('client.home.index', $data);
    }

    public function search(Request $request)
    {
        $text = cleanInput($request->input('s'));
        $data['text'] = $text;
        $data['brands'] = $this->brandRp->filters([
            'status' => ActiveStatus::Active,
        ]);
        $data['tags'] = $this->productRp->getTags();
        return view('client.search.index', $data); 
    }

    public function loadData(Request $request)
    {
        $sort = cleanInput($request->input('sort'));
        $sortArr = explode(',', $sort);
        $price = cleanInput($request->input('price'));
        $priceArr = cleanNumber(explode(',', $price));
        $text = cleanInput($request->input('text'));
        $brands = $request->input('brands');
        $tags = $request->input('tags');

        $products = $this->productRp->filters([
            'relation' => ['medias', 'promotions'],
            'status' => 1,
            'perPage' => 12,
            'sort' => $sortArr,
            'price' => $priceArr,
            'text' => $text,
            'brands' => $brands,
            'tags' => $tags,
        ]);
        $data['products'] = $products;
        $data['listProductHtml'] = view('client.category.list_product', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function regPromotion(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $id = intval($request->input('id'));
            $rules = [
                'email' => 'required|email|max:191|unique:customers,email,' . $id,
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, $validator->errors()->first(), null, $validator->errors());
            }
            $email = cleanInput($request->input('email'));
            $customer = Customer::create([
                'email' => $email,
            ]);
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function dashboard(Request $request)
    {
        $user = auth()->user();
        $orders = $this->orderRp->filters([
            'relations' => ['user'],
            'customer' => $user->id,
        ]);
        $data['statuses'] = StatusOrder::asSelectArray();
        $data['orders'] = $orders;
        return view('dashboard', $data);
    }

    public function searchQr(Request $request)
    {
        if ($request->hasFile('product-qr')) {
            $rules = [
                'product-qr' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $file = $request->file('product-qr');
            $img = UploadFile::saveImage($file, 'search');
            $data = array();
            $qrcode = new QrReader('storage/' . $img);
            $text = $qrcode->text(); //return decoded text from QR Code
            UploadFile::removeImage('storage/' . $img);
            if ($text) {
                $route = Route::getRoutes()->match(Request::create($text));
                $id = $route->parameter('id');
                $data['product'] = $product = Product::where('id', $id)->where('active', 1)->first();
            }
            return $this->iRespond(true, '', $data);
        }
    }
}
