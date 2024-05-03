var OrderClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var orders = {}
    var options = {}
    
    this.run = function (opt) {
        options = opt

        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.statusFilter = $('#status-filter')
        ele.searchField = $('#search-field')
        ele.orderTable = $('#kt_ecommerce_order_table')
        ele.orderCode = $('#code-input-update')
        ele.orderName = $('#name-input-update')
        ele.orderPhone = $('#phone-input-update')
        ele.orderAddress = $('#address-input-update')
        ele.orderTotal = $('#total-input-update')
        ele.orderNote = $('#note-input-update')
        ele.orderStatus = $('#order-status')
        ele.updateBtn = $('#kt_modal_update_order_submit')
        ele.orderId = $('#order-id')
        ele.modalUpdate = $('#kt_modal_update_order')
        loadData()
    }

    this.bindEvents = function () {
        paging()
        handleFilter()
        handleUpdateOrder()
        handleDeleteItem()
    }

    var getParam = function() {
        let params = {
            status : ele.statusFilter.val(),
            text    : ele.searchField.val(),
        }
        for(var i in params){
            if(!params[i]) params[i] = '';
        }
        return params
    }

    var loadData = function () {
        var params = getParam()
        var target = ele.orderTable
        var _cb = function (rs) {
            var data = rs.data
            drawContent(data)
        }
        $.app.ajax($.app.vars.url + '/admin/orders/get-data', 'GET', params, target, null, _cb);
    }
    
    var drawContent = function (data) {
        orders = data.orderKeys
        ele.orderTable.html(data.htmlOrderTable)
    }

    var paging = function () {
        $(document).on('click', '.page-link', function() {
            var $url = $(this).data('href') 
            var target = ele.orderTable
            var _cb = function(rs) {
                var data = rs.data
                drawContent(data)
            }
            $.app.ajax($url, 'GET', '', target, null, _cb)
        })
    }

    var handleFilter = function () {
        ele.statusFilter.on('change', function() {
            loadData()
        })

        ele.searchField.on('keyup', function(e) {
            if (e.keyCode != 13) {
                return false
            }
            loadData()
        })
    }

    var handleUpdateOrder = function () {
        $(document).on('click', '.update-btn', function() {
            var oid = $(this).data('id')
            var order = orders[oid]
            ele.orderId.val(order.id)
            ele.orderCode.val(order.code)
            ele.orderName.val(order.user.name)
            ele.orderPhone.val(order.phone ? order.phone : order.user.phone)
            ele.orderAddress.val(order.address ? order.address : order.user.address)
            ele.orderTotal.val(formatNumber(order.total))
            ele.orderNote.val(order.note)
            ele.orderStatus.val(order.status)
            ele.orderStatus.select2()
        })

        ele.updateBtn.on('click', function () {
            var params = {
                oid : ele.orderId.val(),
                status : ele.orderStatus.val(),
            }
            var target = $('.modal-content', ele.modalUpdate)
            var _cb = function(rs) {
                if (rs.status) {
                    loadData()
                    ele.modalUpdate.modal('hide')
                    $.app.pushNoty('success')
                } else {
                    $.app.pushNoty('error')
                }
            }
            $.app.ajax($.app.vars.url + '/admin/orders/update', 'POST', params, target, null, _cb)
        })
    }

    var handleDeleteItem = function () {
        $(document).on('click', '.delete-btn', function(e) {
            let $id = $(this).data('id')
            let name = orders[$id].code
            var params = {
                id : $id
            }
            let _cb = function (rs) {
                if (rs.status) {
                    loadData()
                    $.app.pushNoty('success')
                } else {
                    $.app.pushNoty('error')
                }
            }
            $.app.pushConfirmNoti({
                'title' : 'Bạn có chắn chắn thực hiện thao tác này?',
                'text' : 'Xóa đơn hàng: ' + name,
                'callback' : function () {
                    $.app.ajax($.app.vars.url + '/admin/orders/delete', 'POST', params, '', null, _cb)
                }
            })
        })
    }
}