<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Đơn hàng: ') . $order->code }}
        </h2>
    </x-slot>

    <div class="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="card card-flush bg-white overflow-hidden shadow-sm sm:rounded-lg flex-row">
            <div class="col-3 p-4">
                <div class="pb-4">Trạng thái</div>
                <div>{{ $statuses[$order->status] }}</div>
            </div>

            <div class="col-3 p-4">
                <div class="pb-4">Số điện thoại</div>
                <div>{{ $order->phone }}</div>
            </div>

            <div class="col-3 p-4">
                <div class="pb-4">Ngày đặt</div>
                <div>{{ date('H:i, d-m-Y', strtotime($order->created_at)) }}</div>
            </div>

            <div class="col-3 p-4">
                <div class="pb-4">Địa chỉ</div>
                <div>{{ $order->address }}</div>
            </div>
        </div>
    </div>

    <div class="pb-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="card card-flush bg-white overflow-hidden shadow-sm sm:rounded-lg flex-row">
            <div class="table-responsive border-bottom mb-9">
                <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                    <thead>
                        <tr class="border-bottom fs-6 fw-bolder text-muted">
                            <th class="min-w-175px pb-2 text-center">Sản phẩm</th>
                            <th class="min-w-70px text-end pb-2">Giá tiền</th>
                            <th class="min-w-80px text-end pb-2">Số lượng</th>
                            <th class="min-w-100px text-end pb-2">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody class="fw-bold text-gray-600">
                        <!--begin::Products-->
                        @foreach ($detail as $product)
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
                                    <div class="ml-5">
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
                        <!--begin::Grand total-->
                        <tr>
                            <td colspan="3" class="fs-3 text-dark fw-bolder text-center">Tổng cộng</td>
                            <td class="text-dark fs-3 fw-bold text-end">{{ currencyFormat($order->total) }}</td>
                        </tr>
                        <!--end::Grand total-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</x-app-layout>
