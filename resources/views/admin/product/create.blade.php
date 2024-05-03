@extends('admin.layouts.master')

@section('breadcrumb')
{{ Breadcrumbs::render('product_create') }}
@endsection

@section('content')
<!--begin::Form-->
<form id="kt_ecommerce_add_product_form" action="javascript:void(0)" class="form d-flex flex-column flex-lg-row">
    <!--begin::Aside column-->
    <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
        <!--begin::Thumbnail settings-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>{{__('Thumbnail')}}</h2>
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body text-center pt-0">
                <!--begin::Image input-->
                <div class="image-input image-input-empty image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(admin/assets/media/svg/files/blank-image.svg)">
                    <!--begin::Preview existing avatar-->
                    <div class="image-input-wrapper w-150px h-150px"></div>
                    <!--end::Preview existing avatar-->
                    <!--begin::Label-->
                    <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="{{__('Thay đổi ảnh')}}">
                        <i class="bi bi-pencil-fill fs-7"></i>
                        <!--begin::Inputs-->
                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                        <input type="hidden" name="avatar_remove" />
                        <!--end::Inputs-->
                    </label>
                    <!--end::Label-->
                    <!--begin::Cancel-->
                    <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="{{__('Hủy thay đổi')}}">
                        <i class="bi bi-x fs-2"></i>
                    </span>
                    <!--end::Cancel-->
                    <!--begin::Remove-->
                    <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="{{__('Xóa ảnh')}}">
                        <i class="bi bi-x fs-2"></i>
                    </span>
                    <!--end::Remove-->
                </div>
                <!--end::Image input-->
                <!--begin::Description-->
                <div class="text-muted fs-7">{{__('Đăng ảnh mô tả cho sản phẩm. Chỉ cho phép tải lên file *.png, *.jpg và *.jpeg.')}}</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Thumbnail settings-->
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
                    <div class="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_product_status"></div>
                </div>
                <!--begin::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Select2-->
                <select class="form-select form-select-sm mb-2" name="active" data-control="select2" data-hide-search="true" data-placeholder="{{__('Chọn trạng thái')}}" id="kt_ecommerce_add_product_status_select">
                    <option></option>
                    <option value="1" selected="selected">{{__('Active')}}</option>
                    <option value="0">{{__('Inactive')}}</option>
                </select>
                <!--end::Select2-->
                <!--begin::Description-->
                <div class="text-muted fs-7">{{__('Chọn trạng thái cho sản phẩm')}}</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Status-->
        <!--begin::Category & tags-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>{{__('Chi tiết sản phẩm')}}</h2>
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Input group-->
                <!--begin::Label-->
                <label class="form-label">{{__('Danh mục')}}</label>
                <!--end::Label-->
                <!--begin::Select2-->
                <select class="form-select form-select-sm mb-2" data-control="select2" name="category_id" id="product-category" data-placeholder="{{__('Chọn danh mục')}}" data-allow-clear="true">
                    <option></option>
                    {!! \App\Helpers\Helper::renderMultilevelOption($categories) !!}
                </select>
                <!--end::Select2-->
                <!--begin::Description-->
                <div class="text-muted fs-7 mb-5">{{__('Chọn một danh mục cho sản phẩm.')}}</div>
                <!--end::Description-->
                <!--end::Input group-->
                <!--begin::Button-->
                <a href="{{route('admin.category.create')}}" class="btn btn-sm btn-light-primary btn-sm mb-10">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
                <span class="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                        <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                    </svg>
                </span>
                <!--end::Svg Icon-->{{__('Danh mục mới')}}</a>
                <!--end::Button-->
                <!--begin::Input group-->
                <label class="form-label d-block">{{__('Thẻ tags')}}</label>
                <select id="kt_ecommerce_add_product_tags" name="tags[]" data-placeholder="{{__('Chọn thẻ tags')}}" class="form-select form-select-sm mb-2" data-control="select2" data-allow-clear="true" multiple="multiple">
                    @foreach($tags as $key => $tag)
                        <option value="{{$tag->id}}">{{$tag->name}}</option>
                    @endforeach
                </select>
                <div class="text-muted fs-7 mb-5">{{__('Gắn thẻ tag vào sản phẩm.')}}</div>
                <!--begin::Button-->
                <button type="button" data-bs-toggle="modal" data-bs-target="#kt_modal_add_tag" class="btn btn-light-primary btn-sm mb-3">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
                    <span class="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->{{__('Thẻ tags mới')}}</button>
                <!--end::Input group-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Category & tags-->
        <div class="card card-flush py-4">
            <div class="card-header">
                <div class="card-title">
                    <h2>{{__('Thương hiệu')}}</h2>
                </div>
            </div>
            <div class="card-body pt-0">
                <select class="form-select form-select-sm mb-2" name="brand_id" data-control="select2" data-hide-search="true" data-allow-clear="true" data-placeholder="{{__('Chọn thương hiệu')}}" id="kt_ecommerce_add_product_brand_select">
                    <option></option>
                    @foreach ($brands as $brand)
                    <option value="{{$brand->id}}">{{$brand->name}}</option>
                    @endforeach
                </select>
                <div class="text-muted fs-7">{{__('Một sản phẩm nên thuộc về một thương hiệu.')}}</div>
            </div>
        </div>
    </div>
    <!--end::Aside column-->
    <!--begin::Main column-->
    <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <!--begin:::Tabs-->
        <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
            <!--begin:::Tab item-->
            <li class="nav-item">
                <a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_product_general">{{__('Thông tin chung')}}</a>
            </li>
            <!--end:::Tab item-->
        </ul>
        <!--end:::Tabs-->
        <!--begin::Tab content-->
        <div class="tab-content">
            <!--begin::Tab pane-->
            <div class="tab-pane fade show active" id="kt_ecommerce_add_product_general" role="tab-panel">
                <div class="d-flex flex-column gap-7 gap-lg-10">
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
                                <label class="required form-label">{{__('Tên sản phẩm')}}</label>
                                <!--end::Label-->
                                <!--begin::Input-->
                                <input type="text" name="product_name" class="form-control form-control-sm mb-2" placeholder="{{__('Tên sản phẩm')}}" value="" />
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">{{__('Tên sản phẩm là bắt buộc và không được trùng với các sản phẩm trước đó.')}}</div>
                                <!--end::Description-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="mb-10">
                                <!--begin::Label-->
                                <label class="form-label">{{__('Tóm tắt')}}</label>
                                <!--end::Label-->
                                <!--begin::Editor-->
                                <input type="text" name="summary" class="form-control form-control-sm mb-2" placeholder="{{__('Tóm tắt sản phẩm')}}" value="" />
                                <!--end::Editor-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">{{__('Tóm tắt ngắn về sản phẩm giúp phân loại sản phẩm tốt hơn.')}}</div>
                                <!--end::Description-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div>
                                <!--begin::Label-->
                                <label class="form-label">{{__('Mô tả sản phẩm')}}</label>
                                <!--end::Label-->
                                <!--begin::Editor-->
                                <div id="kt_ecommerce_add_product_description" name="kt_ecommerce_add_product_description" class="min-h-200px mb-2">
                                    <textarea name="description" id="description"></textarea>
                                </div>
                                <!--end::Editor-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">{{__('Mô tả chi tiết cho sản phẩm có thể giúp quản lý sản phẩm tốt hơn.')}}</div>
                                <!--end::Description-->
                            </div>
                            <!--end::Input group-->
                        </div>
                        <!--end::Card header-->
                    </div>
                    <!--end::General options-->
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <div class="card-title">
                                <h2>{{__('Thông tin kho')}}</h2>
                            </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <div id="no-variation">
                                <div class="mb-10 fv-row">
                                    <label class="form-label required" for="price-product">{{__('Giá sản phẩm')}}</label>
                                    <input type="text" name="price" id="price-product" data-plugin="inputmask-numeric" class="form-control form-control-sm mb-2" placeholder="{{__('Ví dụ: 100000')}}">
                                    <div class="text-muted fs-7">{{__('Nhập giá tiền sản phẩm')}}</div>
                                </div>
                                <div class="mb-10 fv-row">
                                    <label class="form-label required" for="quantity-product">{{__('Số lượng tồn kho')}}</label>
                                    <input type="text" name="quantity" id="quantity-product" data-plugin="inputmask-numeric" class="form-control form-control-sm mb-2" placeholder="{{__('Ví dụ: 50')}}">
                                    <div class="text-muted fs-7">{{__('Nhập số lượng sản phẩm.')}}</div>
                                </div>
                                <div class="mb-10 fv-row">
                                    <label class="form-label" for="sku-product">{{__('Mã code sản phẩm')}}</label>
                                    <input type="text" name="sku" id="sku-product" class="form-control form-control-sm mb-2" placeholder="{{__('Ví dụ: BL-07')}}">
                                    <div class="text-muted fs-7">{{__('Nhập mã code sản phẩm.')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--begin::Media-->
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <div class="card-title">
                                <h2>{{__('Media')}}</h2>
                            </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Input group-->
                            <div class="fv-row mb-2">
                                <!--begin::Dropzone-->
                                <div class="dropzone" id="kt_ecommerce_add_product_media">
                                    <!--begin::Message-->
                                    <div class="dz-message needsclick">
                                        <!--begin::Icon-->
                                        <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                                        <!--end::Icon-->
                                        <!--begin::Info-->
                                        <div class="ms-4">
                                            <h3 class="fs-5 fw-bolder text-gray-900 mb-1">{{__('Nhấp vào đây để tải ảnh lên.')}}</h3>
                                            <span class="fs-7 fw-bold text-gray-400">{{__('Tải lên có thể lên tới 10 ảnh')}}</span>
                                        </div>
                                        <!--end::Info-->
                                    </div>
                                </div>
                                <!--end::Dropzone-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">{{__('Thêm thư viện ảnh cho sản phẩm.')}}</div>
                            <!--end::Description-->
                        </div>
                        <!--end::Card header-->
                    </div>
                    <!--end::Media-->
                </div>
            </div>
            <!--end::Tab pane-->
        </div>
        <!--end::Tab content-->
        <div class="d-flex justify-content-end">
            <!--begin::Button-->
            <a href="{{route('admin.product.index')}}" id="kt_ecommerce_add_product_cancel" class="btn btn-sm btn-light me-5">{{__('Cancel')}}</a>
            <!--end::Button-->
            <!--begin::Button-->
            <button type="submit" data-type="create" id="kt_ecommerce_add_product_submit" class="btn btn-sm btn-primary">
                <span class="indicator-label">{{__('Submit')}}</span>
                <span class="indicator-progress">Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Main column-->
</form>
<!--end::Form-->

@include('admin.product.modal_create_tag')

@endsection

@section('pageJs')
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script> CKEDITOR.replace('description'); </script>
    <script src="{{ url('admin/assets/js/pages/product.create.js') }}"></script>
    <script>
        $(document).ready(function() {
            var options = {
            }
            var instance = new ProductCreateClass();
            instance.run(options);
        });
    </script>
@endsection