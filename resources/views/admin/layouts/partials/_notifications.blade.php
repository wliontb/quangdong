<!--begin::Heading-->
<div class="d-flex flex-column bgi-no-repeat rounded-top" style="background-image:url('assets/media/misc/pattern-1.jpg')">
    <!--begin::Title-->
    <h3 class="text-white fw-bold px-9 mt-10 mb-6">{{ __('common.notifications') }}
        <span class="fs-8 opacity-75 ps-3">{{ $countNew . ' ' . __('common.num_reports') }}</span>
    </h3>
    <!--end::Title-->
    <!--begin::Tabs-->
    {{-- <ul class="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
        <li class="nav-item">
            <a class="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab"
                href="#kt_topbar_notifications_1">Alerts</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab"
                href="#kt_topbar_notifications_2">Updates</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab"
                href="#kt_topbar_notifications_3">Logs</a>
        </li>
    </ul> --}}
    <!--end::Tabs-->
</div>
<!--end::Heading-->
<!--begin::Tab content-->
<div class="tab-content">
    <!--begin::Tab panel-->
    <div class="tab-pane active show" id="kt_topbar_notifications_1" role="tabpanel">
        <!--begin::Items-->
        <div class="scroll-y mh-325px my-5 px-8" id="list-noti-toolbar">
            @php
                $notifications = \App\Classes\Notifications::listNotifications();
            @endphp
            @forelse($notifications as $noti)
                <!--begin::Item-->
                <div class="d-flex flex-stack py-4 noti-item-header">
                    <!--begin::Section-->
                    <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                            {!! renderIconNotify($noti->module_name) !!}
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="mb-0 me-2">
                            @php
                                $seen = false;
                                if ($noti->read_at) {
                                    $seen = true;
                                }
                            @endphp
                            <a href="#" class="fs-6 {{ $seen ? 'text-muted' : 'text-gray-800'}} text-hover-primary fw-bolder">{{ $noti->title }}</a>
                            <div class="text-gray-400 fs-7">{{ date('H:i d/m/Y', strtotime($noti->created_at)) }}</div>
                        </div>
                        <!--end::Title-->
                    </div>
                    <!--end::Section-->
                    <!--begin::Label-->
                    {{-- <span class="badge badge-light fs-8"></span> --}}
                    <!--end::Label-->
                </div>
                <!--end::Item-->
            @empty
                <div class="text-center px-4">
                    <img class="mw-100 mh-200px" alt="image" src="{{ url('assets/media/illustrations/sketchy-1/6.png') }}" />
                </div>
            @endforelse
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-danger">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10"
                                        fill="currentColor" />
                                    <rect x="11" y="14" width="7" height="2" rx="1"
                                        transform="rotate(-90 11 14)" fill="currentColor" />
                                    <rect x="11" y="17" width="2" height="2" rx="1"
                                        transform="rotate(-90 11 17)" fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">HR
                            Confidential</a>
                        <div class="text-gray-400 fs-7">Confidential staff documents</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">2 hrs</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-warning">
                            <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3"
                                        d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                        fill="currentColor" />
                                    <path
                                        d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Company
                            HR</a>
                        <div class="text-gray-400 fs-7">Corporeate staff profiles</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">5 hrs</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-success">
                            <!--begin::Svg Icon | path: icons/duotune/files/fil023.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3"
                                        d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z"
                                        fill="currentColor" />
                                    <path d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z"
                                        fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z"
                                        fill="currentColor" />
                                    <path d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Project
                            Redux</a>
                        <div class="text-gray-400 fs-7">New frontend admin theme</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">2 days</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-primary">
                            <!--begin::Svg Icon | path: icons/duotune/maps/map001.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z"
                                        fill="currentColor" />
                                    <path
                                        d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Project
                            Breafing</a>
                        <div class="text-gray-400 fs-7">Product launch status update</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">21 Jan</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-info">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen006.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3"
                                        d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
                                        fill="currentColor" />
                                    <path
                                        d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Banner
                            Assets</a>
                        <div class="text-gray-400 fs-7">Collection of banner images</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">21 Jan</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
            <!--begin::Item-->
            {{-- <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-4">
                        <span class="symbol-label bg-light-warning">
                            <!--begin::Svg Icon | path: icons/duotune/art/art002.svg-->
                            <span class="svg-icon svg-icon-2 svg-icon-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                    viewBox="0 0 24 25" fill="none">
                                    <path opacity="0.3"
                                        d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                                        fill="currentColor" />
                                    <path
                                        d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="mb-0 me-2">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Icon
                            Assets</a>
                        <div class="text-gray-400 fs-7">Collection of SVG icons</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">20 March</span>
                <!--end::Label-->
            </div> --}}
            <!--end::Item-->
        </div>
        <!--end::Items-->
        <!--begin::View more-->
        <div class="py-3 text-center border-top">
            <a href="{{ route('notification.index') }}"
                class="btn btn-color-gray-600 btn-active-color-primary">{{ __('common.view_all') }}
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                <span class="svg-icon svg-icon-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                            fill="currentColor" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </a>
        </div>
        <!--end::View more-->
    </div>
    <!--end::Tab panel-->
    <!--begin::Tab panel-->
    {{-- <div class="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column px-9">
            <!--begin::Section-->
            <div class="pt-10 pb-0">
                <!--begin::Title-->
                <h3 class="text-dark text-center fw-bolder">Get Pro Access</h3>
                <!--end::Title-->
                <!--begin::Text-->
                <div class="text-center text-gray-600 fw-bold pt-1">Outlines keep you honest.
                    They stoping you from amazing poorly about drive</div>
                <!--end::Text-->
                <!--begin::Action-->
                <div class="text-center mt-5 mb-9">
                    <a href="#" class="btn btn-sm btn-primary px-6" data-bs-toggle="modal"
                        data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                </div>
                <!--end::Action-->
            </div>
            <!--end::Section-->
            <!--begin::Illustration-->
            <div class="text-center px-4">
                <img class="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
            </div>
            <!--end::Illustration-->
        </div>
        <!--end::Wrapper-->
    </div> --}}
    <!--end::Tab panel-->
    <!--begin::Tab panel-->
    {{-- <div class="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
        <!--begin::Items-->
        <div class="scroll-y mh-325px my-5 px-8">
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-success me-4">200 OK</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">New
                        order</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Just now</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-danger me-4">500 ERR</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">New
                        customer</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">2 hrs</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-success me-4">200 OK</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Payment process</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">5 hrs</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-warning me-4">300 WRN</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Search query</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">2 days</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-success me-4">200 OK</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">API
                        connection</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">1 week</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-success me-4">200 OK</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Database restore</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Mar 5</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-warning me-4">300 WRN</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">System update</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">May 15</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-warning me-4">300 WRN</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Server OS update</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Apr 3</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-warning me-4">300 WRN</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">API
                        rollback</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Jun 30</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-danger me-4">500 ERR</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Refund process</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Jul 10</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-danger me-4">500 ERR</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Withdrawal
                        process</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Sep 10</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Code-->
                    <span class="w-70px badge badge-light-danger me-4">500 ERR</span>
                    <!--end::Code-->
                    <!--begin::Title-->
                    <a href="#" class="text-gray-800 text-hover-primary fw-bold">Mail
                        tasks</a>
                    <!--end::Title-->
                </div>
                <!--end::Section-->
                <!--begin::Label-->
                <span class="badge badge-light fs-8">Dec 10</span>
                <!--end::Label-->
            </div>
            <!--end::Item-->
        </div>
        <!--end::Items-->
        <!--begin::View more-->
        <div class="py-3 text-center border-top">
            <a href="../../demo1/dist/pages/user-profile/activity.html"
                class="btn btn-color-gray-600 btn-active-color-primary">View All
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                <span class="svg-icon svg-icon-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1"
                            transform="rotate(-180 18 13)" fill="currentColor" />
                        <path
                            d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                            fill="currentColor" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </a>
        </div>
        <!--end::View more-->
    </div> --}}
    <!--end::Tab panel-->
</div>
<!--end::Tab content-->
