@extends('client.layouts.master')
@section('content')
<div id="main-content-wp" class="clearfix category-product-page">
    <div class="wp-inner">
        <div class="secion" id="breadcrumb-wp">
            <div class="secion-detail">
                <ul class="list-item clearfix">
                    <li>
                        <a href="/" title="">Trang chủ</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="">Tìm kiếm</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-content fl-right">
            <div class="section" id="list-product-wp">
                <div class="section-head clearfix">
                    <h3 class="section-title fl-left">"{{ $text }}"</h3>
                    <div class="filter-wp fl-right">
                        <p class="desc qty-product-desc">Hiển thị 0 trên 0 sản phẩm</p>
                        <div class="form-filter">
                            <form action="javascript:;">
                                <select name="sort" id="sort" class="sort-filter">
                                    <option value="id,desc">Sắp xếp theo</option>
                                    <option value="product_name,asc">-- Từ A-Z --</a></option>
                                    <option value="product_name,desc">-- Từ Z-A --</option>
                                    <option value="price,desc">Giá cao xuống thấp</option>
                                    <option value="price,asc">Giá thấp đến cao</option>
                                </select>
                                <!-- <button type="submit">Lọc</button> -->
                            </form>
                        </div>
                    </div>
                </div>
                <div class="section-detail" id="list-product">
                    
                </div>
            </div>
            <div class="section" id="paging-wp">
                <div class="section-detail">
                </div>
            </div>
        </div>
        <div class="sidebar fl-left">
            @include('client.layouts.product_cat')
            <div class="section" id="filter-product-wp">
                <div class="section-head">
                    <h3 class="section-title">Bộ lọc</h3>
                </div>
                <div class="section-detail">
                    <form method="GET" action="javascript:;">
                        <table>
                            <thead>
                                <tr>
                                    <td colspan="2">Giá</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="0"></td>
                                    <td>Tất cả</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="0,1000000"></td>
                                    <td>Dưới 1.000.000đ</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="1000000,5000000"></td>
                                    <td>1.000.000đ - 5.000.000đ</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="5000000,10000000"></td>
                                    <td>5.000.000đ - 10.000.000đ</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="10000000,20000000"></td>
                                    <td>10.000.000đ - 20.000.000đ</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" name="r_price" id="price-sort" value="20000000"></td>
                                    <td>Trên 20.000.000đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div class="">
                        <div style="font-size: 16px; padding-bottom: 10px;">Thương hiệu</div>
                        <div>
                            @forelse ($brands as $brand)
                                <div class="d-flex pb-2">
                                    <input type="checkbox" name="r_brand" value="{{ $brand->id }}">
                                    <span class="ml-3">{{ $brand->name }}</span>
                                </div>
                            @empty
                            @endforelse
                        </div>
                    </div>
                    <div class="">
                        <div style="font-size: 16px; padding-bottom: 10px;">Tags</div>
                        <div>
                            @forelse ($tags as $tag)
                                <div class="d-flex pb-2">
                                    <input type="checkbox" name="r_tag" value="{{ $tag->id }}">
                                    <span class="ml-3">{{ $tag->name }}</span>
                                </div>
                            @empty
                            @endforelse
                        </div>
                    </div>
                </div>
            </div>
            <div class="section" id="banner-wp">
                <div class="section-detail">
                    <a href="?page=detail_product" title="" class="thumb">
                        <img src="/template/images/banner.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('pageJs')
    <script src="{{ url('client/js/pages/search.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new SearchClass();
            instance.run({
                text : '{{ $text }}'
            });
        });
    </script>
@endsection