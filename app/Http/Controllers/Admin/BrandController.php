<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveStatus;
use App\Http\Controllers\Controller;
use App\Repositories\BrandRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    private $brand;
    public function __construct(BrandRepository $brand)
    {
        $this->brand = $brand;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['title'] = trans('Danh sách Thương hiệu');
        $data['listStatus'] = ActiveStatus::asSelectArray();
        return view('admin.brand.index', $data);
    }

    public function getData(Request $request)
    {
        $data['brands'] = $this->brand->filters([
            'status' => intval(cleanInput($request->input('status'))),
        ]);
        $data['htmlBrandTable'] = view('admin.brand.brand_table', $data)->render();
        return $this->iRespond(true, "", $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $rules = [
            'name' => 'required|string|max:191|unique:brands',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            \Illuminate\Support\Facades\Log::error($validator->errors());
            return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
        }
        try {
            $brand = $this->brand->addBrand($request);
            if ($brand) \Illuminate\Support\Facades\Log::info('Admin has created a brand: ' . $brand->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function update(Request $request)
    {
        $user = Auth::user();
        $id = intval(cleanInput($request->input('id')));
        $rules = [
            'name' => 'required|string|max:191|unique:brands,name,' . $id,
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
        }
        try {
            $brand = $this->brand->updateBrand($request);
            if ($brand) \Illuminate\Support\Facades\Log::info($user->username . ' has updated a brand: ' . $brand->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function updateStatus(Request $request)
    {
        $user = Auth::user();
        $rules = [
            'id' => 'required',
            'active' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
        }
        try {
            $brand = $this->brand->updateStatusBrand($request);
            if ($brand) \Illuminate\Support\Facades\Log::info($user->username . ' has updated status for brand: ' . $brand->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $user = Auth::user();
        $rules = [
            'id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
        }
        try {
            $id = intval(cleanInput($request->input('id')));
            $brand = $this->brand->find($id);
            $brand->delete();
            if ($brand) \Illuminate\Support\Facades\Log::info($user->username . ' has deleted brand: ' . $brand->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }
}
