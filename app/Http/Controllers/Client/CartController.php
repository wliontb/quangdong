<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class CartController extends Controller
{
    private $productRp;
    public function __construct(ProductRepository $productRp)
    {
        $this->productRp = $productRp;
    }

    public function index()
    {
        $data['title'] = 'Giỏ hàng';
        return view('client.cart.index', $data);
    }

    public function loadData(Request $request)
    {
        $data = $this->_processData();
        $data['listProductHtml'] = view('client.cart.list_products', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function addCart(Request $request)
    {
        $productId = cleanNumber($request->input('pid'));
        $quantity = cleanNumber($request->input('qty'));
        $product = $this->productRp->find($productId);
        if ($product->promotions->isNotEmpty() && $product->promotions->where('status', 1)->isNotEmpty()) {
            $priceSale = (100 - $product->promotions->where('status', 1)[0]->discount) * $product->price / 100;
        }
        \Cart::add([
            'id' => $productId,
            'name' => $product->product_name,
            'price' => isset($priceSale) ? $priceSale : $product->price,
            'quantity' => !empty($quantity) ? $quantity : 1,
            'attributes' => [
                'thumb' => $product->thumb,
                'sku' => $product->sku,
            ],
            'associateModel' => $product,
        ]);
        $data = $this->_processData();
        $data['cartHtml'] = view('client.layouts.cart', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function loadCart(Request $request)
    {
        $data = $this->_processData();
        $data['cartHtml'] = view('client.layouts.cart', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function updateCart(Request $request)
    {
        $products = $request->input('products');
        foreach ($products as $key => $product) {
            \Cart::update($product['id'], [
                'quantity' => [
                    'relative' => false,
                    'value' => $product['quantity']
                ],
            ]);
        }
        $data = $this->_processData();
        $data['listProductHtml'] = view('client.cart.list_products', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function delete($id)
    {
        \Cart::remove($id);
        $data = $this->_processData();
        $data['listProductHtml'] = view('client.cart.list_products', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function deleteAll()
    {
        \Cart::clear();
        $data = $this->_processData();
        $data['listProductHtml'] = view('client.cart.list_products', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function _processData()
    {
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
        return $data;
    }

    public function buyNow(Request $request)
    {
        $productId = cleanNumber($request->input('pid'));
        $product = $this->productRp->find($productId);
        \Cart::add([
            'id' => $productId,
            'name' => $product->product_name,
            'price' => $product->price,
            'quantity' => 1,
            'attributes' => [
                'thumb' => $product->thumb,
                'sku' => $product->sku,
            ],
            'associateModel' => $product,
        ]);
        $data = $this->_processData();
        return $this->iRespond(true, '', $data);
    }
}
