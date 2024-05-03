<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveStatus;
use App\Http\Controllers\Controller;
use App\Jobs\SendMail;
use App\Mail\MailPromotion;
use App\Models\Customer;
use App\Models\Promotion;
use App\Models\User;
use App\Repositories\ProductRepository;
use App\Repositories\PromotionRepository;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PromotionController extends Controller
{
    private $promotionRp;
    private $productRp;
    public function __construct(PromotionRepository $promotionRp, ProductRepository $productRp)
    {
        $this->promotionRp = $promotionRp;
        $this->productRp = $productRp;
    }

    public function index()
    {
        $data['title'] = trans('Danh sách Khuyến mãi');
        $data['listStatus'] = ActiveStatus::asSelectArray();
        $data['products'] = $this->productRp->filters([
            'select' => ['id', 'product_name']
        ]);
        return view('admin.promotion.index', $data);
    }

    public function getData(Request $request)
    {
        $status = cleanNumber($request->input('status'));
        $text = cleanInput($request->input('text'));
        $data['statuses'] = ActiveStatus::asSelectArray();
        $data['promotions'] = $promotions = $this->promotionRp->filters([
            'relations' => ['products'],
            'text' => $text,
            'status' => $status,
            'perPage' => 15,
        ]);
        $data['promotionKeys'] = $promotions->keyBy('id');
        $data['htmlListPromotion'] = view('admin.promotion.list_promotion', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function store(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $rules = [
                'name-create' => 'required|string|max:191',
                'description' => 'max:16000',
                'avatar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
                'discount-create' => 'required|numeric',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $name = cleanInput($request->input('name-create'));
            $description = cleanInput($request->input('description'));
            $discount = cleanInput($request->input('discount-create'));
            $products = cleanInput($request->input('product-create'));
            $status = cleanNumber($request->input('active'));
            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $img = UploadFile::saveImage($file, 'promotions');
                $request->merge(['thumb' => $img]);
            }
            $promotion = Promotion::create([
                'name' => $name,
                'description' => $description,
                'discount' => $discount,
                'thumb' => $request->thumb,
                'status' => $status,
            ]);

            foreach ($products as $pid) {
                DB::table('promotion_products')->insert([
                    'promotion_id' => $promotion->id,
                    'product_id' => $pid,
                ]);
            }
            DB::connection()->commit();
            $data = [
                'thumb' => $promotion->thumb,
                'name' => $promotion->name,
                'description' => $promotion->description,
            ];
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        $users = User::select(['is_admin', 'email'])->where('is_admin', 0)->get();
        $customers = Customer::get('email');
        $emails = $users->merge($customers)->pluck('email')->unique();
        foreach ($emails as $email) {
            Mail::to($email)->send(new MailPromotion($data));
        }
        return $this->iRespond(true, 'success');
    }

    public function update(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $rules = [
                'name-update' => 'required|string|max:191',
                'description' => 'max:16000',
                'avatar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
                'discount-update' => 'required|numeric',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
            }
            $pid = cleanNumber($request->input('pid'));
            $name = cleanInput($request->input('name-update'));
            $description = cleanInput($request->input('description'));
            $discount = cleanInput($request->input('discount-update'));
            $products = cleanInput($request->input('product-update'));
            $status = cleanNumber($request->input('active'));
            $promotion = Promotion::find($pid);
            $promotion->name = $name;
            $promotion->description = $description;
            $promotion->discount = $discount;
            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $img = UploadFile::saveImage($file, 'promotions');
                $request->merge(['thumb' => $img]);
                $promotion->thumb = $request->thumb;
            }
            $promotion->status = $status;
            $promotion->save();
            $promotion->products()->detach();
            $promotion->products()->attach($products);
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function destroy(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $id = intval($request->input('id'));
            if (isset($id)) {
                $promotion = $this->promotionRp->find($id);
                $isDelete = $promotion->delete();
                if ($isDelete) \Illuminate\Support\Facades\Log::info('Admin has deleted a promotion: ' . $promotion->toJson());
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
