@extends('client.layouts.master')
@section('content')
<div id="main-content-wp" class="cart-page">
    <div class="section" id="breadcrumb-wp">
        <div class="wp-inner">
            <div class="section-detail">
                <ul class="list-item clearfix">
                    <li>
                        <a href="/" title="">Trang chủ</a>
                    </li>
                    <li>
                        <a href="{{ route('cart.index') }}" title="">Giỏ hàng của tôi</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <form method="POST" action="javascript:;">
    <div id="wrapper" class="wp-inner clearfix">
        <div class="section" id="info-cart-wp">
            <div class="section-detail table-responsive" id="list-product-cart">
                
            </div>
        </div>
        <div class="section" id="action-cart-wp">
            <div class="section-detail">
                <p class="title">Click vào <span>“Cập nhật giỏ hàng”</span> để cập nhật số lượng. Nhập vào biểu tượng <span><i class="fa fa-trash-o"></i></span> để xóa sản phẩm khỏi giỏ hàng. Nhấn vào thanh toán để hoàn tất mua hàng.</p>
                <a href="/" title="" id="buy-more">Mua tiếp</a><br />
                <a href="javascript:;" title="" id="delete-cart">Xóa giỏ hàng</a>
            </div>
        </div>
    </div>
    </form>
</div>
@endsection

@section('pageJs')
    <script src="{{ url('client/js/pages/cart.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new CartClientClass();
            instance.run({
            });
        });
    </script>
@endsection