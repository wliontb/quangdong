<!--begin::Aside-->
<div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle">
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
        <!--begin::Logo-->
        <a href="{{ route('dashboard') }}">
            <img alt="Logo" src="{{ url('client/images/logo1.png') }}" class="h-30px logo" />
        </a>
        <!--end::Logo-->
        <!--begin::Aside toggler-->
        <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
            <span class="svg-icon svg-icon-1 rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path opacity="0.5"
                        d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                        fill="currentColor" />
                    <path
                        d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                        fill="currentColor" />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </div>
        <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->
    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
        <!--begin::Aside Menu-->
        <div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu"
            data-kt-scroll-offset="0">
            <!--begin::Menu-->
            <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">
                <div class="menu-item">
                    <a class="menu-link" href="{{route('dashboard')}}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="9" height="9" rx="2"
                                        fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9"
                                        rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9"
                                        rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9"
                                        rx="2" fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </a>
                </div>
                <div class="menu-item">
                    <div class="menu-content pt-8 pb-2">
                        <span class="menu-section text-muted text-uppercase fs-8 ls-1">Product Management</span>
                    </div>
                </div>
                <div class="menu-item ">
                    <a class="menu-link" href="{{ route('admin.product.index') }}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z" fill="currentColor"/>
                                    <path d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Sản phẩm</span>
                    </a>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com013.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="currentColor"/>
                                    <path d="M7 16H6C5.4 16 5 15.6 5 15V13H8V15C8 15.6 7.6 16 7 16Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="currentColor"/>
                                    <path d="M18 16H17C16.4 16 16 15.6 16 15V13H19V15C19 15.6 18.6 16 18 16Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="currentColor"/>
                                    <path d="M7 5H6C5.4 5 5 4.6 5 4V2H8V4C8 4.6 7.6 5 7 5Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="currentColor"/>
                                    <path d="M18 5H17C16.4 5 16 4.6 16 4V2H19V4C19 4.6 18.6 5 18 5Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Advanced Options</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion menu-active-bg">
                        <div class="menu-item">
                            <a class="menu-link" href="{{ route('admin.category.index') }}">
                                <span class="menu-bullet">
                                    <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">Danh mục</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="{{route('admin.brand.index')}}">
                                <span class="menu-bullet">
                                    <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">Thương hiệu</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="menu-content pt-8 pb-0">
                        <span class="menu-section text-muted text-uppercase fs-8 ls-1">General</span>
                    </div>
                </div>
                <div class="menu-item ">
                    <a class="menu-link" href="{{ route('admin.comment.index') }}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"/>
                                    <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"/>
                                    <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Quản lý Bình luận</span>
                    </a>
                </div>
                <div class="menu-item ">
                    <a class="menu-link" href="{{ route('admin.user.index') }}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z" fill="currentColor"/>
                                    <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="currentColor"/>
                                    <path d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z" fill="currentColor"/>
                                    <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Quản lý Người dùng</span>
                    </a>
                </div>
                <div class="menu-item ">
                    <a class="menu-link" href="{{ route('admin.order.index') }}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor"/>
                                    <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Quản lý Đơn hàng</span>
                    </a>
                </div>
                <div class="menu-item ">
                    <a class="menu-link" href="{{ route('admin.promotion.index') }}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18 20.3C20.2091 20.3 22 18.5092 22 16.3C22 14.0909 20.2091 12.3 18 12.3C15.7909 12.3 14 14.0909 14 16.3C14 18.5092 15.7909 20.3 18 20.3Z" fill="currentColor"/>
                                    <path d="M18 18.3C17.4 18.3 17 17.9 17 17.3V15.3C17 14.7 17.4 14.3 18 14.3C18.6 14.3 19 14.7 19 15.3V17.3C19 17.9 18.6 18.3 18 18.3Z" fill="currentColor"/>
                                    <path d="M14.4 18.1001C14.5 18.5001 14.4 19.0001 14 19.2001C13.8 19.3001 13.7 19.3 13.5 19.3C13.2 19.3 12.8 19.1 12.6 18.8V18.7001C12.1 18.9001 11.6 19.0001 11 19.1001V19.2001C11 19.8001 10.6 20.2001 10 20.2001C9.4 20.2001 9 19.8001 9 19.2001V19.1001C8.4 19.0001 7.89999 18.9001 7.39999 18.7001V18.8C7.19999 19.1 6.9 19.3 6.5 19.3C6.3 19.3 6.2 19.3001 6 19.2001C5.5 18.9001 5.40001 18.3 5.60001 17.8V17.7001C5.20001 17.4001 4.79999 17 4.39999 16.5H4.3C4.1 16.6 4 16.6001 3.8 16.6001C3.5 16.6001 3.09999 16.4001 2.89999 16.1001C2.59999 15.6001 2.8 15.0001 3.3 14.7001H3.39999C3.19999 14.2001 3.1 13.7001 3 13.1001C2.4 13.1001 2 12.7001 2 12.1001C2 11.5001 2.4 11.1001 3 11.1001H3.10001C3.20001 10.5001 3.3 10 3.5 9.5H3.39999C2.89999 9.2 2.8 8.6001 3 8.1001C3.3 7.6001 3.89999 7.50007 4.39999 7.70007H4.5C4.8 7.30007 5.2 6.9 5.7 6.5V6.40002C5.4 5.90002 5.60001 5.3 6.10001 5C6.60001 4.7 7.2 4.90002 7.5 5.40002V5.5C8 5.3 8.50001 5.2001 9.10001 5.1001V5C9.10001 4.4 9.50001 4 10.1 4C10.7 4 11.1 4.4 11.1 5V5.1001C11.7 5.2001 12.2 5.3 12.7 5.5V5.40002C13 4.90002 13.6 4.8 14.1 5C14.6 5.3 14.7 5.90002 14.5 6.40002V6.5C14.9 6.8 15.3 7.20007 15.7 7.70007H15.8C16.3 7.40007 16.9 7.6001 17.2 8.1001C17.5 8.6001 17.3 9.2 16.8 9.5H16.7C16.9 10 17 10.5001 17.1 11.1001H17.2C17.8 11.1001 18.2 11.5001 18.2 12.1001C16 12.1001 14.2 13.9001 14.2 16.1001C14 17.0001 14.2 17.6001 14.4 18.1001ZM11.8 8.40002H8.89999C8.59999 8.40002 8.4 8.5001 8.2 8.6001C8.1 8.7001 7.99999 9.00005 7.89999 9.30005L7.39999 11.9C7.39999 12.1 7.3 12.3 7.3 12.3C7.3 12.5 7.4 12.6001 7.5 12.7001C7.6 12.8001 7.8 12.9 8 12.9C8.2 12.9 8.40001 12.8001 8.60001 12.6001C8.90001 12.4001 9.1 12.3001 9.2 12.2001C9.3 12.1001 9.59999 12.1001 9.89999 12.1001C10.2 12.1001 10.4 12.2 10.6 12.3C10.8 12.4 11 12.6 11.1 12.9C11.2 13.2 11.3 13.5 11.3 13.8C11.3 14.1 11.2 14.4001 11.1 14.7001C11 15.0001 10.8 15.2 10.6 15.3C10.4 15.4 10.1 15.5 9.89999 15.5C9.59999 15.5 9.30001 15.4001 9.10001 15.2001C8.80001 15.0001 8.7 14.8 8.5 14.4C8.3 14 8.1 13.9 7.8 13.9C7.6 13.9 7.5 14.0001 7.3 14.1001C7.2 14.2001 7.10001 14.4 7.10001 14.5C7.10001 14.7 7.19999 15 7.39999 15.3C7.59999 15.6 7.9 15.9001 8.3 16.1001C8.7 16.3001 9.19999 16.5 9.89999 16.5C10.5 16.5 11 16.4001 11.5 16.1001C12 15.8001 12.3 15.5001 12.5 15.1001C12.7 14.7001 12.9 14.2001 12.9 13.6001C12.9 13.2001 12.8 12.9001 12.7 12.6001C12.6 12.3001 12.4 12 12.2 11.8C12 11.6 11.7 11.4 11.4 11.3C11.1 11.2 10.8 11.1001 10.4 11.1001C9.99999 11.1001 9.5 11.2 9 11.5L9.3 9.70007H11.9C12.2 9.70007 12.4 9.6 12.5 9.5C12.6 9.4 12.7 9.2 12.7 9C12.6 8.6 12.3 8.40002 11.8 8.40002Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Quản lý Khuyến mãi</span>
                    </a>
                </div>
                {{-- <div class="menu-item">
                    <a class="menu-link" href="{{ route('suppliers.index') }}"
                        data-bs-trigger="hover" data-bs-dismiss="click">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{ trans('supply.suppliers') }}</span>
                    </a>
                </div>
                <div class="menu-item">
                    <a class="menu-link" href="{{ route('purchasing.index') }}"
                        data-bs-trigger="hover" data-bs-dismiss="click">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor"/>
                                    <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{ trans('purchasing.purchasings') }}</span>
                    </a>
                </div>
                <div class="menu-item">
                    <a class="menu-link" href="{{ route('customers.index') }}"
                        data-bs-trigger="hover" data-bs-dismiss="click">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8254 27.3337H4.17203C3.1536 27.3337 2.17688 26.9291 1.45674 26.2089C0.736602 25.4888 0.332031 24.5121 0.332031 23.4937V4.50699C0.332031 3.48856 0.736602 2.51184 1.45674 1.7917C2.17688 1.07156 3.1536 0.666992 4.17203 0.666992H17.8254C18.8438 0.666992 19.8205 1.07156 20.5407 1.7917C21.2608 2.51184 21.6654 3.48856 21.6654 4.50699V23.4937C21.6654 24.5121 21.2608 25.4888 20.5407 26.2089C19.8205 26.9291 18.8438 27.3337 17.8254 27.3337ZM10.9987 7.33366C10.4713 7.33366 9.95571 7.49006 9.51718 7.78307C9.07865 8.07609 8.73685 8.49257 8.53502 8.97984C8.33319 9.46711 8.28038 10.0033 8.38327 10.5206C8.48616 11.0378 8.74014 11.513 9.11308 11.8859C9.48602 12.2589 9.96117 12.5129 10.4785 12.6158C10.9957 12.7186 11.5319 12.6658 12.0192 12.464C12.5065 12.2622 12.9229 11.9204 13.216 11.4818C13.509 11.0433 13.6654 10.5277 13.6654 10.0003C13.6654 9.29308 13.3844 8.6148 12.8843 8.11471C12.3842 7.61461 11.7059 7.33366 10.9987 7.33366ZM15.3587 19.3337C15.5794 19.347 15.8 19.3052 16.0005 19.2121C16.2011 19.1189 16.3753 18.9774 16.5076 18.8002C16.6398 18.623 16.7259 18.4157 16.7581 18.1969C16.7903 17.9781 16.7676 17.7548 16.692 17.547C16.2027 16.4571 15.3998 15.5378 14.3858 14.9061C13.3718 14.2744 12.1926 13.9591 10.9987 14.0003C9.81328 13.9677 8.64459 14.2856 7.63898 14.9141C6.63337 15.5426 5.83553 16.4538 5.34537 17.5337C4.9987 18.4003 5.70536 19.3337 7.38536 19.3337H15.3587ZM24.332 12.667H22.9987V18.0003H24.332C24.6857 18.0003 25.0248 17.8598 25.2748 17.6098C25.5249 17.3598 25.6654 17.0206 25.6654 16.667V14.0003C25.6654 13.6467 25.5249 13.3076 25.2748 13.0575C25.0248 12.8075 24.6857 12.667 24.332 12.667ZM24.332 4.66699H22.9987V10.0003H24.332C24.6857 10.0003 25.0248 9.85985 25.2748 9.6098C25.5249 9.35975 25.6654 9.02061 25.6654 8.66699V6.00033C25.6654 5.6467 25.5249 5.30756 25.2748 5.05752C25.0248 4.80747 24.6857 4.66699 24.332 4.66699Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{ trans('customer.customers') }}</span>
                    </a>
                </div>
                <div class="menu-item">
                    <a class="menu-link" href="{{ route('order.index') }}"
                        data-bs-trigger="hover" data-bs-dismiss="click">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{ trans('order.orders') }}</span>
                    </a>
                </div>
                <div class="menu-item">
                    <div class="menu-content pt-8 pb-2">
                        <span class="menu-section text-muted text-uppercase fs-8 ls-1">{{ trans('common.user_management') }}</span>
                    </div>
                </div> --}}
                <div class="menu-item">
                    <div class="menu-content">
                        <div class="separator mx-1 my-4"></div>
                    </div>
                </div>
                
            </div>
            <!--end::Menu-->
        </div>
        <!--end::Aside Menu-->
    </div>
    <!--end::Aside menu-->
    {{-- <!--begin::Footer-->
    <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
        <a href="../../demo1/dist/documentation/getting-started.html" class="btn btn-custom btn-primary w-100"
            data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click"
            title="200+ in-house components and 3rd-party plugins">
            <span class="btn-label">Docs &amp; Components</span>
            <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg-->
            <span class="svg-icon btn-icon svg-icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path opacity="0.3"
                        d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                        fill="currentColor" />
                    <rect x="7" y="17" width="6" height="2" rx="1"
                        fill="currentColor" />
                    <rect x="7" y="12" width="10" height="2" rx="1"
                        fill="currentColor" />
                    <rect x="7" y="7" width="6" height="2" rx="1"
                        fill="currentColor" />
                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </a>
    </div>
    <!--end::Footer--> --}}
</div>
<!--end::Aside-->
