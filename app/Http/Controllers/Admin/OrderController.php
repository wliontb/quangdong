<?php

namespace App\Http\Controllers\Admin;

use App\Enums\StatusOrder;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Repositories\OrderRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    private $orderRp;
    public function __construct(OrderRepository $orderRp)
    {
        $this->orderRp = $orderRp;
    }

    public function index()
    {
        $data['title'] = trans('Danh sách Đơn hàng');
        $data['listStatus'] = StatusOrder::asSelectArray();
        return view('admin.order.index', $data);
    }

    public function getData(Request $request)
    {
        $status = cleanNumber($request->input('status'));
        $text = cleanInput($request->input('text'));
        $orders = $this->orderRp->filters([
            'relations' => ['user'],
            'status' => $status,
            'text' => $text,
            'perPage' => 15,
        ]);

        $data['statuses'] = StatusOrder::asSelectArray();
        $data['orders'] = $orders;
        $data['orderKeys'] = $orders->keyBy('id');
        $data['htmlOrderTable'] = view('admin.order.list_order', $data)->render();
        return $this->iRespond(true, "", $data);
    }

    public function update(Request $request)
    {
        $oid = cleanNumber($request->input('oid'));
        $status = cleanNumber($request->input('status'));
        try {
            DB::connection()->beginTransaction();
            $order = Order::find($oid);
            $order->status = $status;
            $order->save();

            if ($status == StatusOrder::SUCCESS) {
                foreach ($order->detail as $item) {
                    $product = Product::find($item->product_id);
                    $product->quantity = $product->quantity - $item->quantity;
                    $product->save();
                }
            }
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
                $order = $this->orderRp->find($id);
                $isDelete = $order->delete();
                if ($isDelete) \Illuminate\Support\Facades\Log::info('Admin has deleted a order: ' . $order->toJson());
            }
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

    public function detail(Request $request, $id)
    {
        $id = cleanNumber($id);
        $order = $this->orderRp->find($id);
        $data['order'] = $order;
        $data['statuses'] = StatusOrder::asSelectArray();
        $data['title'] = 'Đơn hàng: ' . $order->code;
        $data['detail'] = $detail = $order->detail;
        $pids = $detail->pluck('product_id')->toArray();
        $data['products'] = Product::select('id', 'product_name', 'sku', 'thumb')->whereIn('id', $pids)->get()->keyBy('id');
        return view('admin.order.detail', $data);
    }
}
