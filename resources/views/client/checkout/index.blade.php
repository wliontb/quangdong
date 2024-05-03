@extends('client.layouts.master')
@section('content')
<div id="main-content-wp" class="checkout-page">
    <div class="section" id="breadcrumb-wp">
        <div class="wp-inner">
            <div class="section-detail">
                <ul class="list-item clearfix">
                    <li>
                        <a href="/" title="">Trang chủ</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="">Đặt hàng</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="wrapper" class="wp-inner clearfix">
        <form method="POST" action="javascript:;" name="form-checkout">
            <div class="section" id="customer-info-wp">
                <div class="section-head">
                    <h1 class="section-title">Thông tin khách hàng</h1>
                </div>
                <div class="section-detail">
                    <div class="form-row clearfix">
                        <div class="form-col fl-left">
                            <label for="fullname">Họ tên</label>
                            <input type="text" name="name" id="fullname" disabled value="{{ auth()->user() ? auth()->user()->name : '' }}">
                        </div>
                        <div class="form-col fl-right">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" disabled value="{{ auth()->user() ? auth()->user()->email : '' }}">
                        </div>
                    </div>
                    <div class="form-row clearfix">
                        <div class="form-col fl-left">
                            <label for="address">Địa chỉ</label>
                            <input type="text" name="address" id="address" value="{!! auth()->user() ? auth()->user()->address : '' !!}">
                        </div>
                        <div class="form-col fl-right">
                            <label for="phone">Số điện thoại</label>
                            <input type="tel" name="phone" id="phone" value="{{ auth()->user() ? auth()->user()->phone : '' }}">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label for="note">Ghi chú</label>
                            <textarea name="note" id="note"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section" id="order-review-wp">
                <div class="section-head">
                    <h1 class="section-title">Thông tin đơn hàng</h1>
                </div>
                <div class="section-detail">
                    <table class="shop-table">
                        <thead>
                            <tr>
                                <td>Sản phẩm</td>
                                <td>Tổng</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($cart as $product)
                            @php
                            $price = $product['price'];
                            $priceEnd = $price * $product['quantity'];
                            @endphp
                            <tr class="cart-item">
                                <td class="product-name">{{ $product->name }}<strong class="product-quantity">x {{ $product['quantity'] }}</strong></td>
                                <td class="product-total">{{ currencyFormat($priceEnd) }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr class="order-total">
                                <td>Tổng đơn hàng:</td>
                                <td class="sum-total-price" data-sum="{{$sumPrice}}"><strong class="total-price">{{ currencyFormat($sumPrice) }}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div id="payment-checkout-wp">
                        <ul id="payment_methods">
                            {{-- <li>
                                <input type="radio" id="direct-payment" name="method" value="1">
                                <label for="direct-payment">Thanh toán tại cửa hàng</label>
                            </li> --}}
                            {{-- <li>
                                <input type="radio" id="payment-home" name="method" value="2">
                                <label for="payment-home">Thanh toán tại nhà</label>
                            </li> --}}
                        </ul>
                    </div>
                    <div class="place-order-wp clearfix">
                        <input type="submit" id="order-now" value="Đặt hàng">
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection

@section('pageJs')
    <script src="{{ url('client/js/pages/checkout.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new CheckoutClass();
            instance.run({
            });
        });
    </script>
@endsection