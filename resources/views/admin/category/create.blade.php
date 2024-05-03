@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('category_create') }}
@endsection

@section('content')
<form id="kt_ecommerce_add_category_form" action="javascript:void(0)" class="form d-flex flex-column flex-lg-row" >
    <!--begin::Aside column-->
    <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
        <!--begin::Status-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>{{__('Trạng thái')}}</h2>
                </div>
                <!--end::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <div class="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_category_status"></div>
                </div>
                <!--begin::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Select2-->
                <select class="form-select form-select-sm mb-2" data-control="select2" data-hide-search="true" data-placeholder="{{__('Chọn trạng thái')}}" id="kt_ecommerce_add_category_status_select">
                    <option></option>
                    <option value="1" selected="selected">{{__('Active')}}</option>
                    <option value="0">{{__('Inactive')}}</option>
                </select>
                <!--end::Select2-->
                <!--begin::Description-->
                <div class="text-muted fs-7">{{__('Chọn trạng thái cho danh mục')}}</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Status-->
        <!--begin::Automation-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>{{__('Danh mục cha')}}</h2>
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Select store template-->
                <label for="kt_ecommerce_add_category_store_template" class="form-label">{{__('Chọn danh mục cha')}}</label>
                <!--end::Select store template-->
                <!--begin::Select2-->
                <select class="form-select form-select-sm mb-2" data-control="select2" data-hide-search="true" data-placeholder="{{__('Chọn một option')}}" id="kt_ecommerce_add_category_store_template">
                    <option value="no_parent">{{__('Không có danh mục cha')}}</option>
                    {!!\App\Helpers\Helper::renderMultilevelOption($productCategories)!!}
                </select>
                <!--end::Select2-->
                <!--begin::Description-->
                <div class="text-muted fs-7">{{__('Chọn một danh mục cha cho danh mục sản phẩm. Nếu đây là danh mục gốc thì bạn chọn "Không có danh mục cha"')}}</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Automation-->
    </div>
    <!--end::Aside column-->
    <!--begin::Main column-->
    <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <!--begin::General options-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <div class="card-title">
                    <h2>{{__('General')}}</h2>
                </div>
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Input group-->
                <div class="mb-10 fv-row">
                    <!--begin::Label-->
                    <label class="required form-label">{{__('Tên danh mục')}}</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input type="text" name="category_name" class="form-control form-control-sm mb-2" placeholder="{{__('Nhập tên danh mục')}}" value="" />
                    <!--end::Input-->
                    <!--begin::Description-->
                    <div class="text-muted fs-7">{{__('Tên danh mục cần phải được nhập và không được trùng với các danh mục đã có trước đó.')}}</div>
                    <!--end::Description-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div>
                    <!--begin::Label-->
                    <label class="form-label">{{__('Mô tả')}}</label>
                    <!--end::Label-->
                    <!--begin::Editor-->
                    <div id="kt_ecommerce_add_category_description" name="kt_ecommerce_add_category_description" class="min-h-200px mb-2">
                        <textarea name="description" id="description"></textarea>
                        {{-- <tinymce-editor id="description"
                            api-key="no-api-key"
                            height="350"
                            menubar="false"
                            plugins="advlist autolink lists link image charmap preview anchor
                                searchreplace visualblocks code fullscreen
                                insertdatetime media table code help wordcount"
                            toolbar="undo redo | blocks | bold italic backcolor |
                                alignleft aligncenter alignright alignjustify |
                                bullist numlist outdent indent | removeformat | help"
                            content_style="body
                            {
                                font-family:Helvetica,Arial,sans-serif;
                                font-size:14px
                            }"
                            >
                        </tinymce-editor> --}}
                    </div>
                    <!--end::Editor-->
                    <!--begin::Description-->
                    <div class="text-muted fs-7">{{__('Thiết lập mô tả cho Danh mục sản phẩm có thể khiến cho danh mục trở nên dễ hiểu hơn.')}}</div>
                    <!--end::Description-->
                </div>
                <!--end::Input group-->
            </div>
            <!--end::Card header-->
        </div>
        <!--end::General options-->
        <div class="d-flex justify-content-end">
            <!--begin::Button-->
            <a href="{{route('admin.category.index')}}" id="kt_ecommerce_add_product_cancel" class="btn btn-sm btn-light me-5">{{__('Cancel')}}</a>
            <!--end::Button-->
            <!--begin::Button-->
            <button type="submit" data-type="create" id="kt_ecommerce_add_category_submit" class="btn btn-sm btn-primary">
                <span class="indicator-label">{{__('Submit')}}</span>
                <span class="indicator-progress">Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Main column-->
</form>
@endsection

@section('pageJs')
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script> CKEDITOR.replace('description'); </script>
    <script src="{{ url('admin/assets/js/pages/category.create.js') }}"></script>
    <script>
        $(document).ready(function() {
            var instance = new CategoryProductCreateClass();
            instance.run();
        });
    </script>
@endsection