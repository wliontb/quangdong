<head>
    <title>{{ isset($title) ? $title : 'ISMART STORE'}}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="{{ url('client/css/bootstrap/bootstrap-theme.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/css/bootstrap/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/reset.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/css/carousel/owl.carousel.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/css/carousel/owl.theme.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/css/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ url('admin/assets/css/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/style.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('client/responsive.css') }}" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" type="image/png" href="{{ url('client/images/favicon.png') }}"/>

    
</head>