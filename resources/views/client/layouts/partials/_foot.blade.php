<script src="{{ url('client/js/jquery-2.2.4.min.js') }}" type="text/javascript"></script>
<script src="{{ url('client/js/elevatezoom-master/jquery.elevatezoom.js') }}" type="text/javascript"></script>
<script src="{{ url('client/js/bootstrap/bootstrap.min.js') }}" type="text/javascript"></script>
<script src="{{ url('client/js/carousel/owl.carousel.js') }}" type="text/javascript"></script>
<script src="{{ url('admin/assets/js/libs/select2.full.min.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="{{ url('admin/assets/js/libs/loadingoverlay.min.js') }}"></script>
<script src="{{ url('admin/assets/js/base.app.js') }}" type="text/javascript"></script>
<script>
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=849340975164592";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
<script>
    $.app.init({
        url: '{{url('')}}',
        token: '{!! csrf_token() !!}',
    });
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
<script src="{{ url('client/js/main.js') }}" type="text/javascript"></script>
@yield('pageJs')
