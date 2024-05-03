@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('user_detail', $user) }}
@endsection

@section('content')
<div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
        <!--begin::Card-->
        <div class="card mb-5 mb-xl-8">
            <!--begin::Card body-->
            <div class="card-body pt-15">
                <!--begin::Summary-->
                <div class="d-flex flex-center flex-column mb-5">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-150px symbol-circle mb-7">
                        <span class="symbol-label bg-light-danger text-danger fw-bold">{{ strtoupper(substr($user->name, 0, 1)) }}</span>
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Name-->
                    <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1">{{ $user->name }}</a>
                    <!--end::Name-->
                    <!--begin::Email-->
                    <a href="#" class="fs-5 fw-bold text-muted text-hover-primary mb-6">{{ $user->email }}</a>
                    <!--end::Email-->
                </div>
                <!--end::Summary-->
                <!--begin::Details toggle-->
                <div class="d-flex flex-stack fs-4 py-3">
                    <div class="fw-bolder">Chi tiết</div>
                    <!--begin::Badge-->
                    <div class="badge badge-light-info d-inline">{{ $user->is_admin ? 'Admin' : 'User' }}</div>
                    <!--begin::Badge-->
                </div>
                <!--end::Details toggle-->
                <div class="separator separator-dashed my-3"></div>
                <!--begin::Details content-->
                <div class="pb-5 fs-6">
                    <!--begin::Details item-->
                    <div class="fw-bolder mt-5">Điện thoại</div>
                    <div class="text-gray-600">{{ $user->phone }}</div>
                    <!--begin::Details item-->
                    <!--begin::Details item-->
                    <div class="fw-bolder mt-5">Email</div>
                    <div class="text-gray-600">
                        <a href="#" class="text-gray-600 text-hover-primary">{{ $user->email }}</a>
                    </div>
                    <!--begin::Details item-->
                    <!--begin::Details item-->
                    <div class="fw-bolder mt-5">Địa chỉ</div>
                    <div class="text-gray-600">{{ $user->address }}</div>
                    <!--begin::Details item-->
                </div>
                <!--end::Details content-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Card-->
    </div>
    <!--end::Sidebar-->
    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
        <!--begin:::Tabs-->
        <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
            <!--begin:::Tab item-->
            <li class="nav-item">
                <a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_customer_overview">Tổng quát</a>
            </li>
            <!--end:::Tab item-->
        </ul>
        <!--end:::Tabs-->
        <!--begin:::Tab content-->
        <div class="tab-content" id="myTabContent">
            <!--begin:::Tab pane-->
            <div class="tab-pane fade show active" id="kt_ecommerce_customer_overview" role="tabpanel">
                <!--begin::Card-->
                <div class="card pt-4 mb-6 mb-xl-9">
                    <!--begin::Card header-->
                    <div class="card-header border-0">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <h2>Lịch sử đơn hàng</h2>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0 pb-5">
                        <!--begin::Table-->
                        <table class="table align-middle table-row-dashed gy-5" id="kt_table_customers_payment">
                            <!--begin::Table head-->
                            <thead class="border-bottom border-gray-200 fs-7 fw-bolder">
                                <!--begin::Table row-->
                                <tr class="text-start text-muted text-uppercase gs-0">
                                    <th class="min-w-100px">Đơn hàng</th>
                                    <th>Trạng thái</th>
                                    <th>Tổng tiền</th>
                                    <th class="min-w-100px">Số điện thoại</th>
                                    <th class="min-w-100px">Ngày tạo</th>
                                </tr>
                                <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="fs-6 fw-bold text-gray-600">
                                @foreach($orders as $order)
                                <tr>
                                    <!--begin::order=-->
                                    <td>
                                        <a href="{{ route('admin.order.detail', ['id' => $order->id]) }}" class="text-gray-600 text-hover-primary mb-1">{{ $order->code }}</a>
                                    </td>
                                    <!--end::order=-->
                                    <!--begin::Status=-->
                                    <td>
                                        <span class="badge badge-secondary">{{ $statuses[$order->status] }}</span>
                                    </td>
                                    <!--end::Status=-->
                                    <!--begin::Amount=-->
                                    <td>{{ currencyFormat($order->total) }}</td>
                                    <!--end::Amount=-->
                                    <!--begin::Amount=-->
                                    <td>{{ $order->phone ?? $user->phone }}</td>
                                    <!--end::Amount=-->
                                    <!--begin::Date=-->
                                    <td>{{ date('H:i, d-m-Y', strtotime($order->created_at)) }}</td>
                                    <!--end::Date=-->
                                </tr>
                                @endforeach
                            </tbody>
                            <!--end::Table body-->
                        </table>
                        <!--end::Table-->
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end:::Tab pane-->
        </div>
        <!--end:::Tab content-->
    </div>
    <!--end::Content-->
</div>
@endsection
@section('pageJs')
    <script>
    </script>
@endsection