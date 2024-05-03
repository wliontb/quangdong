<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    private $category;
    public function __construct(CategoryRepository $category)
    {
        $this->category = $category;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['title'] = trans('Danh sách danh mục');
        return view('admin.category.index', $data);
    }

    public function getData(Request $request)
    {
        $data = array();
        $data['categories'] = $this->category->getAll();
        $data['htmlCategoryTable'] = view('admin.category.category_table', $data)->render();
        return $this->iRespond(true, "", $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        $data['title'] = trans('Thêm mới danh mục');
        $data['productCategories'] = $this->category->filters();
        return view('admin.category.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'name' => 'required|string|max:191|unique:categories',
                'description' => 'string|nullable',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $request->merge([
                'active' => filter_var($request->active, FILTER_VALIDATE_BOOLEAN)
            ]);
            $category = $this->category->create($request->all());
            if ($category) \Illuminate\Support\Facades\Log::info('Admin has created a category: ' . $category->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
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
        $data['title'] = trans('Cập nhật danh mục');
        $data['category'] = $this->category->find($id);
        $data['productCategories'] = $this->category->filters();
        return view('admin.category.update', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function update(Request $request)
    {
        try {
            $id = intval($request->input('id'));
            $rules = [
                'name' => 'required|string|max:191|unique:categories,name,' . $id,
                'id' => 'required|numeric',
                'description' => 'string|nullable',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $category = $this->category->updateCat($request);
            if ($category) \Illuminate\Support\Facades\Log::info('Admin has updated a category: ' . $category->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $id = intval($request->input('id'));
            if (isset($id)) {
                $category = $this->category->find($id);
                $isDelete = $category->delete();
                if ($isDelete) \Illuminate\Support\Facades\Log::info('Admin has deleted a category: ' . $category->toJson());
            }
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }
}
