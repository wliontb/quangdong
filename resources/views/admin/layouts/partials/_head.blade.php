<head><base href="../../../">
    <title>DatViet Electronics | {{$title ?? 'Thiết bị ngoại vi giá cả tốt nhất!' }} </title>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{{ __('common.store_name')}} &amp; Warehouse management application" />
    {{-- <meta property="og:url" content="https://keenthemes.com/metronic" /> --}}
    <meta property="og:site_name" content="DatViet Electronics" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <link rel="canonical" href="https://preview.keenthemes.com/metronic8" /> --}}
    <link rel="shortcut icon" href="{{ url('admin/assets/media/logos/logo.png')}}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
    <link href="{{ url('admin/assets/js/libs/sweetalert2/dist/sweetalert2.min.css')}}" rel="stylesheet" type="text/css" />
	{{-- <link href="{{ url('admin/assets/js/libs/DataTables/datatables.min.css')}}" rel="stylesheet" type="text/css" /> --}}
	<link href="{{ url('admin/assets/css/datatables.bundle.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{ url('admin/assets/css/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css">
    <link href="{{ url('admin/assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('admin/assets/plugins/global/plugins-custom.bundle.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('admin/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    
    @yield('style')
    {{-- <script type="text/javascript" src="{{ url('messages.js') }}"></script> --}}
    <script>
        var glbInfo = {
            'baseUrl' : '{{url('')}}',
        }
    </script>
    @yield('topScript')
</head>