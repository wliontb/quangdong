@extends('client.layouts.master')
@section('content')
<div id="main-content-wp" class="home-page clearfix">
    <div class="wp-inner">
        <div class="main-content fl-right">
            <div class="section" id="slider-wp">
                <div class="section-detail">
                    @foreach ($promotions as $promotion)
                    <div class="item">
                        <a href="javascript:;">
                            <img src="{{ config('custom.urlStorage') . $promotion->thumb }}" alt="{{ $promotion->name }}">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
            <div class="section" id="support-wp">
                <div class="section-detail">
                    <ul class="list-item clearfix">
                        <li>
                            <div class="thumb">
                                <img src="{{ url('client/images/icon-1.png') }}">
                            </div>
                            <h3 class="title">Miễn phí vận chuyển</h3>
                            <p class="desc">Tới tận tay khách hàng</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src="{{ url('client/images/icon-2.png') }}">
                            </div>
                            <h3 class="title">Tư vấn 24/7</h3>
                            <p class="desc">1900.9999</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src="{{ url('client/images/icon-3.png') }}">
                            </div>
                            <h3 class="title">Tiết kiệm hơn</h3>
                            <p class="desc">Với nhiều ưu đãi cực lớn</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src="{{ url('client/images/icon-4.png') }}">
                            </div>
                            <h3 class="title">Thanh toán nhanh</h3>
                            <p class="desc">Hỗ trợ nhiều hình thức</p>
                        </li>
                        <li>
                            <div class="thumb">
                                <img src="{{ url('client/images/icon-5.png') }}">
                            </div>
                            <h3 class="title">Đặt hàng online</h3>
                            <p class="desc">Thao tác đơn giản</p>
                        </li>
                    </ul>
                </div>
                <div class="section-detail">
                    <img src="{{ url('client/images/banner1.png') }}">
                    <ul class="list-item clearfix">
                    @foreach ($products as $product)
                    <li>
                        <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="thumb fl-left">
                            <img src="{{ config('custom.urlStorage') . $product->thumb }}" alt="">
                        </a>
                        <div class="info fl-right">
                            <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="product-name">{{ $product->product_name }}</a>
                            <div class="price" style="background: #f12a43; color:white; border-radius: 12px">
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
                        </div>
                    </li>
                    @endforeach
                    </ul>
                </div>
            </div>
            <div class="section" id="feature-product-wp">
                {{-- @include('product_hit') --}}
            </div>
            @foreach ($productCats as $key => $productCat)
                @if ($productCat->products->isNotEmpty() && $productCat->products->count() > 7 && $key < 5)
                <div class="section" id="list-product-wp">
                    <div class="section-head">
                        <h3 class="section-title">{{ $productCat->name }}</h3>
                    </div>
                    <div class="section-detail">
                        <ul class="list-item clearfix">
                            @foreach ($productCat->products as $pi => $product)
                                @if ($pi < 8)
                                <li>
                                    <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="thumb">
                                        <img src="{{ 'storage/' . $product->thumb }}">
                                    </a>
                                    <a href="{{ route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($product->product_name)]) }}" title="" class="product-name">{{ $product->product_name }}</a>
                                    <div class="price">
                                        <span class="new">{{ currencyFormat($product->price) }}</span>
                                        <span class="old"></span>
                                    </div>
                                    <div class="action clearfix">
                                        <a href="javascript:;" data-id="{{$product->id}}" title="Thêm giỏ hàng" class="add-cart fl-left">Thêm giỏ hàng</a>
                                        <a href="javascript:;" title="Mua ngay" class="buy-now fl-right" data-id="{{ $product->id }}">Mua ngay</a>
                                    </div>
                                </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                </div>
                @endif
            @endforeach
        </div>
        <div class="sidebar fl-left">
            @include('client.layouts.product_cat')
            @include('client.layouts.product_hot')
            <div class="section" id="banner-wp">
                <div class="section-detail">
                    <a href="https://github.com/davephan09" title="" class="thumb">
                        <img src="template/images/david_github.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
