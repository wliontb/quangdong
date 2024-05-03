<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Quản lý đơn hàng') }}
        </h2>
    </x-slot>

    <div class="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="card card-flush bg-white overflow-hidden shadow-sm sm:rounded-lg ">
            <div class="card-body pt-0" id="kt_ecommerce_order_table">
                <table class="table align-middle table-row-dashed fs-6 gy-5" >
                    <thead>
                        <!--begin::Table row-->
                        <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                            <th class="min-w-125px" data-priority="1">Mã đơn hàng</th>
                            <th class="min-w-125px">Người mua</th>
                            <th class="min-w-125px">Điện thoại</th>
                            <th class="min-w-125px">Tổng tiền</th>
                            <th class="min-w-125px">Trạng thái</th>
                            <th class="min-w-125px">Ngày khởi tạo</th>
                        </tr>
                        <!--end::Table row-->
                    </thead>
                    <!--end::Table head-->
                    <tbody class="fw-bold text-gray-600">
                        @forelse ($orders as $order)
                        <tr>
                            <td><a href="{{ route('checkout.order', ['code' => $order->code]) }}">{{$order->code}}</a></td>
                            <td>{{ $order->user->name }}</td>
                            <td>{{ $order->phone ?? $order->user->phone }}</td>
                            <td>{{ currencyFormat($order->total) }}</td>
                            <td><span class="badge badge-primary p-2">{{ $statuses[$order->status] }}</span></td>
                            <td>{{date('H:i, d M Y', strtotime($order->created_at))}}</td>
                        </tr>
                        @empty
                        @endforelse
                    </tbody>
                </table>
                {{-- <div class="py-4 ml-2">
                    {!! $orders->appends(request()->all())->links('includes.paginations') !!}
                </div> --}}
            </div>
        </div>
    </div>
</x-app-layout>
