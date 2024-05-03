<ul class="list-item clearfix">
    @forelse ($products as $product)
    <li>
        <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="thumb">
            <img src="{{ isset($product->thumb) ? config('custom.urlStorage') . $product->thumb : '' }}">
        </a>
        <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="product-name">{{ $product->product_name }}</a>
        <div class="price">
            @if ($product->promotions->isNotEmpty() && $product->promotions->where('status', 1)->isNotEmpty())
                @php
                    $priceSale = (100 - $product->promotions->where('status', 1)[0]->discount) * $product->price / 100;
                @endphp
                <span class="new">{{ currencyFormat($priceSale) }}</span>
                <span class="old">{{ currencyFormat($product->price) }}</span>
            @else
                <span class="new">{{ currencyFormat($product->price) }}</span>
            @endif
        </div>
        <div class="action clearfix">
            <a href="javascript:;" title="Thêm giỏ hàng" class="add-cart fl-left" data-id="{{ $product->id }}">Thêm giỏ hàng</a>
            <a href="javascript:;" title="Mua ngay" class="buy-now fl-right" data-id="{{ $product->id }}">Mua ngay</a>
        </div>
    </li>
    @empty
    <li>Không có sản phẩm</li>
    @endforelse
</ul>
<div class="py-2 ml-2 d-flex justify-content-center">
    {!! $products->appends(request()->all())->links('includes.paginations') !!}
</div>