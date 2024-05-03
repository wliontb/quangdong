@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('order_detail', $order) }}
@endsection

@section('content')
<div class="card">
    <!-- begin::Body-->
    <div class="card-body py-20">
        <!-- begin::Wrapper-->
        <div class="mw-lg-950px mx-auto w-100">
            <!--begin::Body-->
            <div class="pb-12">
                <!--begin::Wrapper-->
                <div class="d-flex flex-column gap-7 gap-md-10">
                    <!--begin::Message-->
                    <div class="fw-bolder fs-2">{{ $order->user->name }}
                    <span class="fs-6">({{ $order->user->email }})</span>,
                    <br />
                    <span class="text-muted fs-5"></span></div>
                    <!--begin::Message-->
                    <!--begin::Separator-->
                    <div class="separator"></div>
                    <!--begin::Separator-->
                    <!--begin::Order details-->
                    <div class="d-flex flex-column flex-sm-row gap-7 gap-md-10 fw-bolder">
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Mã đơn hàng</span>
                            <span class="fs-5">{{ $order->code }}</span>
                        </div>
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Ngày đặt</span>
                            <span class="fs-5">{{ date('H:i, d-m-Y', strtotime($order->created_at)) }}</span>
                        </div>
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Trạng thái</span>
                            <span class="fs-5">{{ $statuses[$order->status] }}</span>
                        </div>
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Tổng tiền</span>
                            <span class="fs-5">{{ currencyFormat($order->total) }}</span>
                        </div>
                    </div>
                    <!--end::Order details-->
                    <!--begin::Billing & shipping-->
                    <div class="d-flex flex-column flex-sm-row gap-7 gap-md-10 fw-bolder">
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Địa chỉ</span>
                            <span class="fs-6">{{ $order->address }}</span>
                        </div>
                        <div class="flex-root d-flex flex-column">
                            <span class="text-muted">Điện thoại</span>
                            <span class="fs-6">{{ $order->phone }}</span>
                        </div>
                    </div>
                    <!--end::Billing & shipping-->
                    <!--begin:Order summary-->
                    <div class="d-flex justify-content-between flex-column">
                        <!--begin::Table-->
                        <div class="table-responsive border-bottom mb-9">
                            <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                                <thead>
                                    <tr class="border-bottom fs-6 fw-bolder text-muted">
                                        <th class="min-w-175px pb-2">Sản phẩm</th>
                                        <th class="min-w-70px text-end pb-2">Đơn giá</th>
                                        <th class="min-w-80px text-end pb-2">Số lượng</th>
                                        <th class="min-w-100px text-end pb-2">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody class="fw-bold text-gray-600">
                                    <!--begin::Products-->
                                    @foreach($detail as $product)
                                    <tr>
                                        <!--begin::Product-->
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <!--begin::Thumbnail-->
                                                <a href="javascript:;" class="symbol symbol-50px">
                                                    <span class="symbol-label" style="background-image:url({{ config('custom.urlStorage') . $products[$product->product_id]->thumb }});"></span>
                                                </a>
                                                <!--end::Thumbnail-->
                                                <!--begin::Title-->
                                                <div class="ms-5">
                                                    <div class="fw-bolder">{{ $products[$product->product_id]->product_name }}</div>
                                                    <div class="fs-7 text-muted">{{ $products[$product->product_id]->sku }}</div>
                                                </div>
                                                <!--end::Title-->
                                            </div>
                                        </td>
                                        <!--end::Product-->
                                        <!--begin::SKU-->
                                        <td class="text-end">{{ currencyFormat($product->price) }}</td>
                                        <!--end::SKU-->
                                        <!--begin::Quantity-->
                                        <td class="text-end">{{ $product->quantity }}</td>
                                        <!--end::Quantity-->
                                        <!--begin::Total-->
                                        <td class="text-end">{{ currencyFormat($product->subtotal) }}</td>
                                        <!--end::Total-->
                                    </tr>
                                    @endforeach
                                    <!--end::Products-->
                                    <tr>
                                        <td colspan="3" class="fs-3 text-dark fw-bolder text-end">Tổng cộng</td>
                                        <td class="text-dark fs-3 fw-boldest text-end">{{ currencyFormat($order->total) }}</td>
                                    </tr>
                                    <!--end::Grand total-->
                                </tbody>
                            </table>
                        </div>
                        <!--end::Table-->
                    </div>
                    <!--end:Order summary-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Body-->
        </div>
        <!-- end::Wrapper-->
    </div>
    <!-- end::Body-->
</div>  

@endsection
@section('pageJs')
    <script>
    </script>
@endsection