var CartClientClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var options = {}
    var cart = {}
    
    this.run = function (opt) {
        options = opt
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.cartTable = $('#list-product-cart')
        ele.deleteAll = $('#delete-cart')

        loadData()
    }

    this.bindEvents = function () {
        handleUpdateCart()
        handleDeleteProduct()
        handleDeleteAll()
        handleUpdateNumber()
    }

    var getParam = function () {
        var params = {
        }
        for(var i in params) {
            if(!params[i]) params[i] = ''
        }
        return params
    }

    var loadData = function (target) {
        var params = getParam()
        var target = ele.cartTable
        var _cb = function(rs) {
            var data = rs.data
            cart = data.cart
            ele.cartTable.html(data.listProductHtml)
        }
        $.app.ajax($.app.vars.url + '/carts/load-data', 'GET', params, target, null, _cb);
    }

    var handleUpdateCart = function () {
        $(document).on('click', '#update-cart', function () {
            var params = {
                products : {}
            }
            var target = $(this)
            $.each($('.cart-item'), function (i, item) {
                var id = $(item).data('id')
                params.products[i] = {
                    'id' : id,
                    'quantity' : $('.number-order', $(item)).val()
                }
            })
            var _cb = function(rs) {
                var data = rs.data
                cart = data.cart
                ele.cartTable.html(data.listProductHtml)
            }
            $.app.ajax($.app.vars.url + '/carts/update-cart', 'GET', params, target, null, _cb);
        })
    }

    var handleDeleteAll = function () {
        ele.deleteAll.on('click', function () {
            var params = {}
            var target = $(this)
            var _cb = function(rs) {
                var data = rs.data
                cart = data.cart
                ele.cartTable.html(data.listProductHtml)
            }
            $.app.ajax($.app.vars.url + '/carts/delete-all', 'GET', params, target, null, _cb);
        })
    }

    var handleDeleteProduct = function () {
        $(document).on('click', '.del-product', function () {
            var params = {
            }
            var target = $(this)
            var _cb = function(rs) {
                var data = rs.data
                cart = data.cart
                ele.cartTable.html(data.listProductHtml)
            }
            $.app.ajax($.app.vars.url + '/carts/delete/' + $(this).data('id'), 'GET', params, target, null, _cb);
        })
    }

    var handleUpdateNumber = function () {
        $(document).on('change', '.number-order', function () {
            var item = $(this).closest('.cart-item')
            var id = item.data('id')
            var quantity = $(this).val()
            var price = cart[id].price
            $('.sub-total', $(item)).html($.app.formatNumber(price * quantity) + ' đ')
        })
    }
}