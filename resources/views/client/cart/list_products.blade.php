<table class="table">
    <thead>
        <tr>
            <td>Mã sản phẩm</td>
            <td>Ảnh sản phẩm</td>
            <td>Tên sản phẩm</td>
            <td>Giá sản phẩm</td>
            <td>Số lượng</td>
            <td>Thành tiền</td>
            <td>Xóa</td>
        </tr>
    </thead>
    <tbody>
        @forelse ($cart as $product)
        @php
            $price = $product['price'];
            $priceEnd = $price * $product['quantity'];
        @endphp
        <tr class="cart-item" data-id="{{ $product['id'] }}">
            <td>{{ $product['attributes']['sku'] ?? '' }}</td>
            <td>
                <a href="{{ route('product.detail', ['id' => $product['id'], 'slug' => \Str::slug($product['name'])]) }}" title="" class="thumb">
                    <img src="{{ isset($product['attributes']['thumb']) ? config('custom.urlStorage') . $product['attributes']['thumb'] : '' }}" alt="">
                </a>
            </td>
            <td>
                <a href="{{ route('product.detail', ['id' => $product['id'], 'slug' => \Str::slug($product['name'])]) }}" title="" class="name-product">{{ $product['name'] }}</a>
            </td>
            <td>{{ currencyFormat($product['price']) }}</td>
            <td>
                <input type="number" name="num-product[{{$product['id']}}]" value="{{ $product['quantity'] }}" class="num-order number-order">
            </td>
            <td class="sub-total">{{ currencyFormat($priceEnd) }}</td>
            <td>
                <a href="javascript:;" title="" class="del-product" data-id="{{ $product['id'] }}"><i class="fa fa-trash-o"></i></a>
            </td>
        </tr>
        @empty
            <tr>Giỏ hàng hiện đang không có sản phẩm nào. Vui lòng quay về trang sản phẩm để thêm vào giỏ hàng!</tr>
        @endforelse
    </tbody>
    <tfoot>
        <tr>
            <td colspan="7">
                <div class="clearfix">
                    <p id="total-price" class="fl-right">Tổng giá: <span>{{ currencyFormat($sumPrice) }}</span></p>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="7">
                <div class="clearfix">
                    <div class="fl-right">
                        <input type="submit" title="" id="update-cart" value="Cập nhật giỏ hàng"/>
                        <a href="{{ route('checkout.index') }}" title="" id="checkout-cart">Thanh toán</a>
                    </div>
                </div>
            </td>
        </tr>
    </tfoot>
</table>