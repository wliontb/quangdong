<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('admin.layouts.partials._head')
<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            @include('admin.layouts.partials._sidebar')
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                @include('admin.layouts.partials._header')
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    				@include('admin.layouts.partials._toolbar')
					<div class="post d-flex flex-column-fluid" id="kt_post">
						<div id="kt_content_container" class="container-xxl">
                        @yield('content')
                        </div>
                    </div>
                </div>            
                @include('admin.layouts.partials._footer')
            </div>
        </div>
    </div>

    @include('admin.layouts.partials._foot')
</body>
</html>