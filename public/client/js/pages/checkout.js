var CheckoutClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var options = {}
    
    this.run = function (opt) {
        options = opt
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.checkoutBtn = $('#order-now')
        ele.addressInp = $('input[name="address"]')
        ele.phoneInp = $('input[name="phone"]')
        ele.noteInp = $('#note')
    }

    this.bindEvents = function () {
        handleCheckout()
    }

    var handleCheckout = function () {
        ele.checkoutBtn.on('click', function () {
            var params = {
                'address' : ele.addressInp.val(),
                'phone' : ele.phoneInp.val(),
                'note' : ele.noteInp.val(), 
            }

            var target = ele.checkoutBtn
            var _cb = function (rs) {
                if(rs.status) {
                    $.app.pushNotyCallback({
                        'type' : 'success',
                        'callback' : function () {
                            window.location.href = $.app.vars.url
                        }
                    })
                } else {
                    $.app.pushNoty('error', rs.message)
                }
            }
            $.app.ajax($.app.vars.url + '/checkout/post-checkout', 'POST', params, target, null, _cb);
        })
    }
}