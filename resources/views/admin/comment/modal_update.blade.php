<!--begin::Modal - Customers - Add-->
<div class="modal fade" id="kt_modal_update_comment" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
            <!--begin::Form-->
            <form class="form" action="javascript:void(0)" id="kt_modal_update_comment_form"
                data-kt-redirect="../../demo1/dist/apps/customers/list.html">
                <!--begin::Modal header-->
                <div class="modal-header" id="kt_modal_add_customer_header">
                    <!--begin::Modal title-->
                    <h2 class="fw-bolder">{{__('Cập nhật Bình luận')}}</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->
                    <div id="kt_modal_add_customer_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal"> 
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                        <span class="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                    rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                    transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                        </span>
                        <!--end::Svg Icon-->
                    </div>
                    <!--end::Close-->
                </div>
                <!--end::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body py-10 px-lg-17">
                    <!--begin::Scroll-->
                    <div class="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                        data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">
                        <!--begin::Input group-->
                        <div class="fv-row mb-7 fs-6">
                            <!--begin::Label-->
                            {{-- <label class="required fs-6 fw-bold mb-2">{{__('Tên Thương hiệu')}}</label> --}}
                            <!--end::Label-->
                            <div class="mb-3 border-1 p-2">
                                <div class="fs-6 fw-bold mb-2" id="comment-user"></div>
                                <div class="" id="comment-time"></div>
                            </div>
                            <p class="p-3 mb-3 border rounded-1" id="comment-content"></p>
                            <div class="">
                                <span class="mb-2">Reply</span>
                                <div class="mt-2 w-100">
                                    <textarea name="" id="comment-reply" cols="30" rows="10" placeholder="Trả lời bình luận..." class="rounded-2 w-100 p-3"></textarea>
                                </div>
                            </div>
                        </div>
                        <!--end::Input group-->
                        <div class="fv-row mb-7">
                            <!--begin::Wrapper-->
                            <div class="d-flex flex-stack">
                                <!--begin::Label-->
                                <div class="me-5">
                                    <!--begin::Label-->
                                    <label class="fs-6 fw-bold">Trạng thái</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <div class="fs-7 fw-bold text-muted">Click nếu muốn thay đổi trạng thái</div>
                                    <!--end::Input-->
                                </div>
                                <!--end::Label-->
                                <div class="ms-auto w-25">
                                    <select class="form-select form-select-sm form-select-solid w-100" name="comment_status" id="comment-status" data-control="select2" data-hide-search="true" data-placeholder="{{__('Trạng thái')}}" tabindex="-1" aria-hidden="true">
                                        @foreach ($statuses as $key => $status)
                                            <option value="{{ $key }}">{{ $status }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <!--begin::Wrapper-->
                        </div>
                        <input type="number" name="" id="comment-id" val="" hidden>
                    </div>
                    <!--end::Scroll-->
                </div>
                <!--end::Modal body-->
                <!--begin::Modal footer-->
                <div class="modal-footer flex-center">
                    <!--begin::Button-->
                    <button type="reset" id="kt_modal_update_customer_cancel" data-bs-dismiss="modal"
                        class="btn btn-sm btn-light me-3">Discard</button>
                    <!--end::Button-->
                    <!--begin::Button-->
                    <button type="submit" id="kt_modal_update_comment_submit" class="btn btn-sm btn-primary">
                        <span class="indicator-label">Submit</span>
                        <span class="indicator-progress">Please wait...
                            <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                    <!--end::Button-->
                </div>
                <!--end::Modal footer-->
            </form>
            <!--end::Form-->
        </div>
    </div>
</div>
<!--end::Modal - Customers - Add-->