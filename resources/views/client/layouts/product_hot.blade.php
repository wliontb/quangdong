<div class="section" id="selling-wp">
    <div class="section-head">
        <h3 class="section-title">Sản phẩm mới</h3>
    </div>
    <div class="section-detail">
        <ul class="list-item">
            @foreach ($products as $product)
            <li class="clearfix">
                <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="thumb fl-left">
                    <img src="{{ config('custom.urlStorage') . $product->thumb }}" alt="">
                </a>
                <div class="info fl-right">
                    <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="product-name">{{ $product->product_name }}</a>
                    <div class="price">
                        @if ($product->promotions->isNotEmpty() && $product->promotions->where('status', 1)->isNotEmpty())
                        @php
                            $priceSale = (100 - $product->promotions->where('status', 1)[0]->discount) / 100 * $product->price;
                        @endphp
                            <span class="new">{{ currencyFormat($priceSale) }}</span>
                            <span class="old">{{ currencyFormat($product->price) }}</span>
                        @else
                            <span class="new">{{ currencyFormat($product->price) }}</span>
                        @endif
                    </div>
                    <a href="javascript:;" title="" class="buy-now" data-id="{{ $product->id }}">Mua ngay</a>
                </div>
            </li>
            @endforeach
        </ul>
    </div>
</div>