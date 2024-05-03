@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('product') }}
@endsection

@section('content')
<!--begin::Products-->
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
                <input type="text" data-kt-ecommerce-product-filter="search" id="search-field" class="form-control form-control-sm form-control-solid w-250px ps-14" placeholder="{{__('Tìm kiếm')}}" />
            </div>
            <!--end::Search-->
        </div>
        <!--end::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
            <div class="w-100 mw-250px">
                <!--begin::Select2-->
                <select class="form-select form-select-sm form-select-solid" id="category-filter" data-control="select2" data-hide-search="false" data-placeholder="{{__('Danh mục')}}" data-kt-ecommerce-product-filter="category" >
                    <option value="10">{{__('All')}}</option>
                    {!!\App\Helpers\Helper::renderMultilevelOption($productCategories)!!}
                </select>
                <!--end::Select2-->
            </div>
            <div class="w-100 mw-150px">
                <!--begin::Select2-->
                <select class="form-select form-select-sm form-select-solid" id="status-filter" data-control="select2" data-hide-search="true" data-placeholder="{{__('Trạng thái')}}" data-kt-ecommerce-product-filter="status" >
                    <option value="10">{{__('All')}}</option>
                    <option value="1">{{__('Active')}}</option>
                    <option value="0">{{__('Inactive')}}</option>
                </select>
                <!--end::Select2-->
            </div>
            <!--begin::Add product-->
            <a href="{{route('admin.product.create')}}" class="btn btn-sm btn-primary">{{__('Thêm sản phẩm')}}</a>
            <!--end::Add product-->
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-0">
        <!--begin::Table-->
        <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
            
        </table>
        <!--end::Table-->
    </div>
    <!--end::Card body-->
</div>
<!--end::Products-->
@endsection

@section('pageJs')
    <script src="{{ url('admin/assets/js/pages/product.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new ProductClass();
            instance.run();
        });
    </script>
@endsection