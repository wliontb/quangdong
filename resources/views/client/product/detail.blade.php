@extends('client.layouts.master')
@section('content')
<div id="main-content-wp" class="clearfix detail-product-page">
    <div class="wp-inner">
        <div class="secion" id="breadcrumb-wp">
            <div class="secion-detail">
                <ul class="list-item clearfix">
                    <li>
                        <a href="/" title="">Trang chủ</a>
                    </li>
                    @if ($category && $category->parent)
                    <li>
                        <a href="{{ route('category.detail', ['id' => $category->parent->id, 'slug' => \Str::slug($category->parent->name)]) }}" title="">{{ $category->parent->name }}</a>
                    </li>
                    @endif
                    @if ($category)
                    <li>
                        <a href="{{ route('category.detail', ['id' => $category->id, 'slug' => \Str::slug($category->name)]) }}" title="">{{ $category->name }}</a>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
        <div class="main-content fl-right">
            <div class="section" id="detail-product-wp">
                <div class="section-detail clearfix">
                    <div class="thumb-wp fl-left">
                        <a href="" title="" id="main-thumb">
                            <img id="zoom" src="{{ isset($product->thumb) ? config('custom.urlStorage') . $product->thumb : '' }}" data-zoom-image="{{ isset($product->thumb) ? config('custom.urlStorage') . $product->thumb : '' }}" />
                        </a>
                        <div id="list-thumb">
                            @foreach ($product->medias as $image)
                            <a href="" data-image="{{ isset($image->url) ? config('custom.urlStorage') . $image->url : '' }}" data-zoom-image="{{ isset($image->url) ? config('custom.urlStorage') . $image->url : '' }}">
                                <img id="zoom" src="{{ isset($image->url) ? config('custom.urlStorage') . $image->url : '' }}" />
                            </a>
                            @endforeach
                        </div>
                    </div>
                    <div class="thumb-respon-wp fl-left">
                        <img src="{{ isset($product->thumb) ? config('custom.urlStorage') . $product->thumb : '' }}" alt="">
                    </div>
                    <div class="info fl-right">
                        <h3 class="product-name">{{ $product->product_name }}</h3>
                        <div class="d-flex mb-3">
                            @foreach($product->tags as $tag)
                                <span class="badge badge-primary mr-2 p-2">{{ $tag->name }}</span>
                            @endforeach
                        </div>
                        <div class="desc">
                            {!! $product->summary !!}
                        </div>
                        <div class="num-product">
                            <span class="title">Sản phẩm: </span>
                            @if ($product->quantity > 0)
                                <span class="status">Còn hàng</span>
                            @else 
                                <span class="status">Hết hàng</span>
                            @endif
                        </div>
                        
                        @if ($product->promotions->isNotEmpty() && $product->promotions->where('status', 1)->isNotEmpty())
                            @php
                                $priceSale = (100 - $product->promotions->where('status', 1)[0]->discount) * $product->price / 100;
                            @endphp
                            <p class="price">{{ currencyFormat($priceSale) }}</p>
                        @else
                            <p class="price">{{ currencyFormat($product->price) }}</p>
                        @endif
                        <form action="javascript:;" method="POST">
                            <div id="num-order-wp">
                                <a title="" id="minus"><i class="fa fa-minus"></i></a>
                                <input type="number" name="num-product" value="1" min="1" max="{{ $product->quantity }}" id="num-order">
                                <a title="" id="plus"><i class="fa fa-plus"></i></a>
                            </div>
                            <input type="submit" title="Thêm giỏ hàng" value="Thêm giỏ hàng" class="add-cart" data-id="{{$product->id}}"/>
                            <input type="hidden" name="product_id" value="{{ $product->id }}">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
            <div class="section" id="post-product-wp">
                <div class="section-head">
                    <h3 class="section-title">Mô tả sản phẩm</h3>
                </div>
                <div class="section-detail">{!! html_entity_decode($product->description) !!}</div>
            </div>
            <div class="section" id="comment-wp">
                <div class="section-head">
                    <h3 class="section-title">Comment</h3>
                </div>
                <div class="section-detail" style="font-size: 16px;">
                    <div class="" id="list-comment-card">
                        
                    </div>
                    @if (auth()->user())
                        <div class="card mt-2">
                            <div class="p-3">
                                <textarea name="content" id="comment-content" cols="30" rows="3" class="form-control"></textarea>
                            </div>
                            <div class="px-3 pb-3">
                                <button type="button" class="btn btn-primary float-right" id="btn-submit-comment">Gửi bình luận</button>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
            <div class="section" id="same-category-wp">
                <div class="section-head">
                    <h3 class="section-title">Cùng danh mục</h3>
                </div>
                <div class="section-detail">
                    <ul class="list-item">
                        @foreach ($productsMore as $productMore)
                        <li>
                            <a href="{{ route('product.detail', ['id' => $productMore->id, 'slug' => \Str::slug($productMore->product_name)]) }}" title="" class="thumb">
                                <img src="{{ config('custom.urlStorage') . $productMore->thumb }}">
                            </a>
                            <a href="{{ route('product.detail', ['id' => $productMore->id, 'slug' => \Str::slug($productMore->product_name)]) }}" title="" class="product-name">{{ $productMore->product_name }}</a>
                            <div class="price">
                                @if ($productMore->promotions->isNotEmpty() && $productMore->promotions->where('status', 1)->isNotEmpty())
                                    @php
                                        $priceSale = (100 - $productMore->promotions->where('status', 1)[0]->discount) * $productMore->price / 100;
                                    @endphp
                                    <span class="new">{{ currencyFormat($priceSale) }}</span>
                                    <span class="old">{{ currencyFormat($productMore->price) }}</span>
                                @else
                                    <span class="new">{{ currencyFormat($productMore->price) }}</span>
                                @endif
                            </div>
                            <div class="action clearfix">
                                <a href="javascript:;" title="" class="add-cart fl-left" data-id="{{$productMore->id}}">Thêm giỏ hàng</a>
                                <a href="javascript:;" title="" class="buy-now fl-right" data-id="{{ $productMore->id }}">Mua ngay</a>
                            </div>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
        <div class="sidebar fl-left">
            @include('client.layouts.product_cat')
            @include('client.layouts.product_hot')
        </div>
    </div>
</div>

<div id="qr-product">
    <div class="pl-3">{{ \QrCode::size(50)->generate(route('product.detail', ['id' => $product->id, 'slug' => \Str::slug($productMore->product_name)])) }}</div>
    <div>QR sản phẩm</div>
</div>

@endsection

@section('pageJs')
    <script src="{{ url('client/js/pages/product.detail.js') }}" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            var instance = new ProductDetailClientClass();
            instance.run({
                productId : '{{ $product->id }}'
            });
        });
    </script>
@endsection