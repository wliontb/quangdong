<!DOCTYPE html>
<html>
@include('client.layouts.partials._head')
<body>
    <div id="site">
        <div id="container">
            @include('client.layouts.partials._header')
            @yield('content')
            @include('client.layouts.partials._footer')
        </div>
    </div>
    @include('client.layouts.partials._foot')
</body>
</html>