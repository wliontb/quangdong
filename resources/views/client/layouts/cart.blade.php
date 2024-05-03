<div id="btn-cart">
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    <span id="num" class="qty-cart">{{ !empty($qty) ? $qty : '' }}</span>
</div>
<div id="dropdown">
    <p class="desc">Có
        <span>{{ !empty($qty) ? $qty : '0' }}
            sản phẩm</span> trong giỏ hàng
    </p>
    @if (!empty($cart))
        <ul class="list-cart">
            @if (count($cart) > 0)
                @foreach ($cart as $key => $product)
                    <li class="clearfix">
                        <a href="{{ route('product.detail', ['id' => $product['id'], 'slug' => \Str::slug($product['name'])]) }}" title="" class="thumb fl-left">
                            <img src="{{ isset($product['attributes']['thumb']) ? config('custom.urlStorage') . $product['attributes']['thumb'] : '' }}" alt="">
                        </a>
                        <div class="info fl-right">
                            <a href="{{ route('product.detail', ['id' => $product['id'], 'slug' => \Str::slug($product['name'])]) }}" title="" class="product-name">{{ $product['name'] }}</a>
                            <p class="price">{{ currencyFormat($product['price']) }}</p>
                            <p class="qty">Số lượng: <span>{{ $product['quantity'] }}</span></p>
                        </div>
                    </li>
                @endforeach
            @endif
        </ul>
        <div class="total-price clearfix">
            <p class="title fl-left">Tổng:</p>
            <p class="price fl-right">{{ currencyFormat($sumPrice) }}</p>
        </div>
    @else
        <div class="clearfix total-price empty-cart">
            <span>Giỏ hàng trống</span>
        </div>
    @endif
    <div class="action-cart clearfix">
        <a href="{{ route('cart.index') }}" title="Giỏ hàng" class="view-cart fl-left">Giỏ hàng</a>
        <a href="/checkout" title="Thanh toán" class="checkout fl-right">Thanh toán</a>
    </div>
</div>
