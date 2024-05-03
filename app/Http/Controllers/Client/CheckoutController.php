<?php

namespace App\Http\Controllers\Client;

use App\Enums\StatusOrder;
use App\Http\Controllers\Controller;
use App\Models\DetailOrder;
use App\Models\Order;
use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    private $productRp;
    public function __construct(ProductRepository $productRp)
    {
        $this->productRp = $productRp;
    }

    public function index()
    {
        $data['title'] = 'Thanh toán';
        $data['cart'] = $cart = \Cart::getContent();
        $qty = 0;
        $sumPrice = 0;
        if (!empty($cart)) {
            foreach ($cart as $product) {
                $qty += $product['quantity'];
                $sumPrice += $product['price'] * $product['quantity'];
            }
        }
        $data['sumPrice'] = $sumPrice;
        $data['qty'] = $qty;
        return view('client.checkout.index', $data);
    }

    public function order(Request $request, $code)
    {
        $code = cleanInput($code);
        $order = Order::with('detail', 'user')->where('code', $code)->first();
        if ($order->customer_id != auth()->user()->id) {
            abort(404);
        }
        $data['statuses'] = StatusOrder::asSelectArray();
        $data['order'] = $order;
        $data['detail'] = $detail = $order->detail;
        $pids = $detail->pluck('product_id')->toArray();
        $data['products'] = Product::select('id', 'product_name', 'sku', 'thumb')->whereIn('id', $pids)->get()->keyBy('id');
        return view('client.checkout.detail_order', $data);
    }

    public function gocheckout(Request $request)
    {
        // session(['cost_id' => $request->id]);
        session(['url_prev' => url()->previous()]);
        $vnp_TmnCode = "3VINOSG4"; //Mã website tại VNPAY 
        $vnp_HashSecret = "ZGTGDUIFIVSEMJLBDPCGATXGZKMUKCGC"; //Chuỗi bí mật
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://peralhub.test/checkout/return-vnpay";
        $vnp_TxnRef = date("YmdHis"); //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = "Thanh toan don hang";
        $vnp_OrderType = '130000';
        $vnp_Amount = $request->input('amount') * 100;
        $vnp_Locale = 'vn';
        $vnp_IpAddr = request()->ip();
        $vnp_BankCode = 'VNBANK';

        $inputData = array(
            "vnp_Version" => "2.0.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . $key . "=" . $value;
            } else {
                $hashdata .= $key . "=" . $value;
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
           // $vnpSecureHash = md5($vnp_HashSecret . $hashdata);
            $vnpSecureHash = hash('sha256', $vnp_HashSecret . $hashdata);
            $vnp_Url .= 'vnp_SecureHashType=SHA256&vnp_SecureHash=' . $vnpSecureHash;
        }
        return redirect($vnp_Url);
    }

    public function returnVnpay(Request $request)
    {
        $url = session('url_prev','/');
        if($request->vnp_ResponseCode == "00") {
            $this->apSer->thanhtoanonline(session('cost_id'));
            return redirect($url)->with('success' ,'Đã thanh toán phí dịch vụ');
        }
        session()->forget('url_prev');
        return redirect($url)->with('errors' ,'Lỗi trong quá trình thanh toán phí dịch vụ');
    }

    public function postCheckout(Request $request)
    {
        DB::connection()->beginTransaction();
        try {
            $address = cleanInput($request->input('address'));
            $phone = cleanInput($request->input('phone'));
            $note = cleanInput($request->input('note'));
            
            $cart = \Cart::getContent();
            $qty = 0;
            $sumPrice = 0;
            if ($cart->isNotEmpty()) {
                foreach ($cart as $product) {
                    $qty += $product['quantity'];
                    $sumPrice += $product['price'] * $product['quantity'];
                }
            } else {
                return $this->iRespond(false, 'Giỏ hàng của bạn còn trống! Vui lòng quay lại thêm sản phẩm vào giỏ hàng!', []);
            }

            $user = auth()->user();
            $order = Order::create([
                'code' => generateCode(),
                'customer_id' => $user->id,
                'status' => StatusOrder::PENDING,
                'total' => $sumPrice,
                'phone' => $phone,
                'address' => $address,
                'note' => $note,
            ]);

            foreach ($cart as $product) {
                DetailOrder::create([
                    'order_id' => $order->id,
                    'product_id' => $product['id'],
                    'quantity' => $product['quantity'],
                    'price' => $product['price'],
                    'subtotal' => $product['quantity'] * $product['price'],
                ]);
            }
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        \Cart::clear();
        return $this->iRespond(true, 'success');
    }
}
