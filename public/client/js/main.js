$(document).ready(function () {
    //  SLIDER
    var slider = $('#slider-wp .section-detail');
    slider.owlCarousel({
        autoPlay: 4500,
        navigation: false,
        navigationText: false,
        paginationNumbers: false,
        pagination: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: true // itemsMobile disabled - inherit from itemsTablet option
    });

    //  ZOOM PRODUCT DETAIL
    $("#zoom").elevateZoom({ gallery: 'list-thumb', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif' });

    //  LIST THUMB
    var list_thumb = $('#list-thumb');
    list_thumb.owlCarousel({
        navigation: true,
        navigationText: false,
        paginationNumbers: false,
        pagination: false,
        stopOnHover: true,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5], // betweem 900px and 601px
        itemsTablet: [768, 5], //2 items between 600 and 0
        itemsMobile: true // itemsMobile disabled - inherit from itemsTablet option
    });

    //  FEATURE PRODUCT
    var feature_product = $('#feature-product-wp .list-item');
    feature_product.owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: false,
        paginationNumbers: false,
        pagination: false,
        stopOnHover: true,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [800, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: [375, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    //  SAME CATEGORY
    var same_category = $('#same-category-wp .list-item');
    same_category.owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: false,
        paginationNumbers: false,
        pagination: false,
        stopOnHover: true,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [800, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: [375, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    //  SCROLL TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#btn-top').stop().fadeIn(150);
        } else {
            $('#btn-top').stop().fadeOut(150);
        }
    });
    $('#btn-top').click(function () {
        $('body,html').stop().animate({ scrollTop: 0 }, 800);
    });

    // CHOOSE NUMBER ORDER
    var value = parseInt($('#num-order').attr('value'));
    $('#plus').click(function () {
        value++;
        $('#num-order').attr('value', value);
        update_href(value);
    });
    $('#minus').click(function () {
        if (value > 1) {
            value--;
            $('#num-order').attr('value', value);
        }
        update_href(value);
    });

    //  MAIN MENU
    $('#category-product-wp .list-item > li').find('.sub-menu').after('<i class="fa fa-angle-right arrow" aria-hidden="true"></i>');

    //  TAB
    tab();

    //  EVEN MENU RESPON
    $('html').on('click', function (event) {
        var target = $(event.target);
        var site = $('#site');

        if (target.is('#btn-respon i')) {
            if (!site.hasClass('show-respon-menu')) {
                site.addClass('show-respon-menu');
            } else {
                site.removeClass('show-respon-menu');
            }
        } else {
            $('#container').click(function () {
                if (site.hasClass('show-respon-menu')) {
                    site.removeClass('show-respon-menu');
                    return false;
                }
            });
        }
    });

    //  MENU RESPON
    $('#main-menu-respon li .sub-menu').after('<span class="fa fa-angle-right arrow"></span>');
    $('#main-menu-respon li .arrow').click(function () {
        if ($(this).parent('li').hasClass('open')) {
            $(this).parent('li').removeClass('open');
        } else {

            //            $('.sub-menu').slideUp();
            //            $('#main-menu-respon li').removeClass('open');
            $(this).parent('li').addClass('open');
            //            $(this).parent('li').find('.sub-menu').slideDown();
        }
    });

    // SEARCH
    // $('.search-ajax-result').hide();
    // $('#s').keyup(function () {
    //     var text = $(this).val();
    //     if (text != '') {
    //         $.ajax({
    //             url: "/search?key=" + text,
    //             type: 'GET',
    //             success: function (res) {
    //                 var html = '';
    //                 for (var pro of res) {
    //                     var slug = convertToSlug(pro.name);

    //                     html += '<div class="media">';
    //                     html += '<a href="/san-pham/' + pro.id + '-' + slug + '.html" class="pull-left">';
    //                     html += '<img src="' + pro['image'].thumb + '" alt="" width="80" class="media-object">';
    //                     html += '</a>';
    //                     html += '<div class="media-body">';
    //                     html += '<h4 class="media-heading"><a href="/san-pham/' + pro.id + '-' + slug + '.html">' + pro.name + '</a></h4>';
    //                     html += '<p>' + pro.price_sale + '</p>';
    //                     html += '</div>';
    //                     html += '</div>';
    //                 }
    //                 $('.search-ajax-result').show(500);
    //                 $('.search-ajax-result').html(html);
    //             }
    //         })
    //     } else {
    //         $('.search-ajax-result').html('');
    //         $('.search-ajax-result').hide();
    //     }
    // });

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }

    // CART
    loadCart()
    
    $(document).on('click', '.add-cart', function() {
        var pid = $(this).data('id');
        var params = {
            pid : pid,
            qty : $('#num-order').val()
        }
        var target = $(this)
        var _cb = function (rs) {
            var data = rs.data
            $('#cart-wp').html(data.cartHtml)
            $('.qty-cart').html(data.qty)
        }  
        $.app.ajax($.app.vars.url + '/carts/add-cart', 'GET', params, target, null, _cb)
    })

    $(document).on('click', '.buy-now', function() {
        var pid = $(this).data('id')
        var params = {
            pid : pid,
        }
        var target = $(this)
        var _cb = function (rs) {
            var data = rs.data
            window.location.href = $.app.vars.url + '/checkout'
        }
        $.app.ajax($.app.vars.url + '/carts/buy-now', 'GET', params, target, null, _cb)
    })

    // REGISTER PROMOTION
    $(document).on('click', '#sm-reg', function() {
        var email = $('.email-reg').val()
        var params = {
            email : email,
        }
        var target = $(this)
        var _cb = function (rs) {
            var data = rs.data
            if (rs.status) {
                $.app.pushNoty('success')
            } else {
                $.app.pushNoty('error', rs.message)
            }
        }
        $.app.ajax($.app.vars.url + '/reg-promotion', 'GET', params, target, null, _cb)
    })

    //SEARCH QR
    $(document).on('change', '#product-qr-inp', function() {
        var params = new FormData($('#form-qr')[0])
        let target = $('#search-qr')
        $.app.showLoading(target)
        let _cb = (rs) => {
            $.app.hideLoading(target)
            $('#rs-qr').html('')
            if (rs.status && rs.data.product) {
                var product = rs.data.product
                var html = `<a href="${$.app.vars.url + '/product/' + product.id + '-' + toSlug(product.product_name)}" title="" class="thumb fl-left mr-3" style="width: 30%;border: 1px solid #ddd;display:block">
                        <img src="${$.app.vars.url + '/storage/' + product.thumb}" alt="">
                    </a>
                    <div class="info fl-right">
                        <a href="${$.app.vars.url + '/product/' + product.id + '-' + toSlug(product.product_name)}" title="" class="product-name">${product.product_name}</a>
                        <div class="price">
                            <span class="new">${$.app.formatNumber(product.price) + ' đ'}</span>
                        </div>
                    </div>`;
                $('#rs-qr').html(html)
            } else {
                $.app.pushNoty('error', 'Không tìm thấy sản phẩm phù hợp!')
            }
        }
        var url = $.app.vars.url + '/search-qr'
        $.ajax({
            url : url,
            type : 'POST',
            data : params,
            processData: false,
            contentType: false,
            success : _cb,
            error : function (rs) {
                $.app.hideLoading(target)
                $.app.pushNoty('error')
            }
        })
    })
});

function tab() {
    var tab_menu = $('#tab-menu li');
    tab_menu.stop().click(function () {
        $('#tab-menu li').removeClass('show');
        $(this).addClass('show');
        var id = $(this).find('a').attr('href');
        $('.tabItem').hide();
        $(id).show();
        return false;
    });
    $('#tab-menu li:first-child').addClass('show');
    $('.tabItem:first-child').show();
}

function loadCart() {
    var params = {}
    var target = ''
    var _cb = function (rs) {
        var data = rs.data
        $('#cart-wp').html(data.cartHtml)
        $('.qty-cart').html(data.qty)
    }  
    $.app.ajax($.app.vars.url + '/carts/load-cart', 'GET', params, target, null, _cb)
}

function toSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
           .replace(/\s+/g, '-') // collapse whitespace and replace by -
           .replace(/-+/g, '-'); // collapse dashes

  return str;
}