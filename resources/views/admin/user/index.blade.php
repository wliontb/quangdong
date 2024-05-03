@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('user') }}
@endsection

@section('content')
<div class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header align-items-center py-5 gap-2 gap-md-5">
        <!--begin::Card title-->
        <div class="card-title">
            <!--begin::Search-->
            <div class="d-flex align-items-center position-relative my-1">
                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                <span class="svg-icon svg-icon-1 position-absolute ms-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
                <input type="text" id="search-field" data-kt-ecommerce-category-filter="search" class="form-control form-control-sm form-control-solid w-250px ps-14" placeholder="Tìm kiếm" />
            </div>
            <!--end::Search-->
        </div>
        <!--end::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
            <div class="w-100 mw-150px">
                <select class="form-select form-select-sm form-select-solid" name="filter_status" id="status-filter" data-control="select2" data-hide-search="true" data-placeholder="Trạng thái" tabindex="-1" aria-hidden="true">
                    <option value="10">All</option>
                    <option value="1">Admin</option>
                    <option value="0">User</option>
                </select>
            </div>
            <!--begin::Add customer-->
            {{-- <button type="button" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user"  class="btn btn-sm btn-primary">Thêm mới</button> --}}
            <!--end::Add customer-->
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-0" id="kt_ecommerce_user_table">
        <!--begin::Table-->
        <!--end::Table-->
    </div>
    <!--end::Card body-->
</div>    

@endsection
@section('pageJs')
    <script src="{{ url('admin/assets/js/pages/user.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new UserClass();
            instance.run();
        });
    </script>
@endsection