<div id="header-wp">
    <div id="head-top" class="clearfix">
        <div class="wp-inner">
            <div class="dropdown">
                <a href="javascript:;" title="" id="payment-link" class="fl-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tìm kiếm sản phẩm</a>
                {{-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button> --}}
                <div class="dropdown-menu" style="top: 37px;width:32rem;" aria-labelledby="payment-link" id="search-qr">
                    <div class="p-3">
                        <form action="javascript:;" id="form-qr">
                            <input type="file" class="form-control-file" name="product-qr" id="product-qr-inp">
                        </form>
                    </div>
                    <div class="border"></div>
                    <div class="p-3 d-flex clearfix" id="rs-qr" class="">
                        
                    </div>
                </div>
              </div>
            <div id="main-menu-wp" class="fl-right">
                <ul id="main-menu" class="clearfix">
                    <li>
                        <a href="{{ route('home') }}" title="">Trang chủ</a>
                    </li>
                    <li>
                        <a href="{{ route('cart.index') }}" title="">Giỏ hàng</a>
                    </li>
                    @if (auth()->user())
                        <li>
                            <a href="{{ route('profile.edit') }}" title="">{{ auth()->user()->name }}</a>
                        </li>
                        <li>
                            <a href="{{ route('dashboard') }}" title="">Đơn hàng</a>
                        </li>
                        @if (auth()->user()->is_admin)
                            <li>
                                <a href="{{ route('admin.order.index') }}">Trang quản trị</a>
                            </li>
                        @endif
                        <li>
                            <form action="{{ route('logout') }}" method="post">
                                @csrf
                                <a href="javascript:;" style="cursor: pointer;"><input type="submit" value="Đăng xuất" style="background: transparent; border: none;"></a>
                            </form>
                        </li>
                    @else
                        <li>
                            <a href="{{ route('register') }}" title="">Đăng ký</a>
                        </li>
                        <li>
                            <a href="{{ route('login') }}" title="">Đăng nhập</a>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </div>
    <div id="head-body" class="clearfix">
        <div class="wp-inner">
            <a href="/" title="" id="logo" class="fl-left"><img src="{{ url('client/images/logo.png')}}" /></a>
            <div id="search-wp" class="fl-left">
                <form method="GET" action="/search">
                    <input type="text" name="s" value="" id="s"
                        placeholder="Nhập từ khóa tìm kiếm tại đây!">
                    <button type="submit" id="sm-s">Tìm kiếm</button>
                    {{-- <div class="search-ajax-result">

                    </div> --}}
                </form>
            </div>
            <div id="action-wp" class="fl-right">
                <div id="advisory-wp" class="fl-left">
                    <span class="title">Tư vấn</span>
                    <span class="phone">0987.654.321</span>
                </div>
                <div id="btn-respon" class="fl-right"><i class="fa fa-bars" aria-hidden="true"></i></div>

                <a href="{{ route('cart.index') }}" title="giỏ hàng" id="cart-respon-wp" class="fl-right">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span id="num" class="qty-cart"></span>
                </a>
                <div id="cart-wp" class="fl-right">
                    {{-- @include('client.layouts.cart') --}}
                </div>
            </div>
        </div>
    </div>
</div>
