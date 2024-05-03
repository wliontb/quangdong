<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveStatus;
use App\Enums\StatusOrder;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $user;
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['title'] = trans('Danh sách Người dùng');
        return view('admin.user.index', $data);
    }

    public function getData(Request $request)
    {
        $status = cleanNumber($request->input('status'));
        $text = cleanInput($request->input('text'));
        $data['users'] = $this->user->filters([
            'perPage' => 15,
            'relations' => ['orders'],
            'status' => $status,
            'text' => $text,
        ]);
        $data['htmlUserTable'] = view('admin.user.list_user', $data)->render();
        return $this->iRespond(true, "", $data);
    }

    public function destroy(Request $request)
    {
        $rules = [
            'id' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return $this->iRespond(false, trans('common.error_try_again'), null, $validator->errors());
        }
        try {
            $id = intval(cleanInput($request->input('id')));
            $user = $this->user->find($id);
            $user->delete();
            if ($user) \Illuminate\Support\Facades\Log::info('Admin has deleted brand: ' . $user->toJson());
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function detail(Request $request, $id)
    {
        $id = cleanNumber($id);
        $data['user'] = $user = auth()->user();
        $orders = Order::where('customer_id', $id)->get();
        $data['orders'] = $orders;
        $data['statuses'] = StatusOrder::asSelectArray();
        $data['title'] = 'Người dùng: ' . $user->name;
        return view('admin.user.detail_user', $data);
    }
}
