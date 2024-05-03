var PromotionClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var promotions = {}
    var options = {}
    
    this.run = function (opt) {
        options = opt

        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.statusFilter = $('#status-filter')
        ele.searchField = $('#search-field')
        ele.promotionTable = $('#kt_ecommerce_promotion_table')
        ele.promotionStatus = $('#promotion-status')
        ele.updateBtn = $('#kt_modal_update_promotion_submit')
        ele.promotionId = $('#pid-update')
        ele.modalUpdate = $('#kt_modal_update_promotion')
        ele.createBtn = $('#kt_modal_add_promotion_submit')
        ele.promotionCreateForm = $('#kt_modal_add_promotion_form')
        ele.modalCreate = $('#kt_modal_add_promotion')
        ele.modalUpdate = $('#kt_modal_update_promotion')
        ele.nameUd = $('#name-input-update')
        ele.descUd = $('#description-input-update')
        ele.discountUd = $('#discount-input-update')
        ele.productUd = $('#kt_ecommerce_udpate_category_store_template')
        ele.thumbUd = $('#thumb-update')
        ele.promotionUpdateForm = $('#kt_modal_update_promotion_form')

        loadData()
    }

    this.bindEvents = function () {
        paging()
        handleFilter()
        handleCreatePromotion()
        handleUpdatePromotion()
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
        $.app.ajax($.app.vars.url + '/admin/promotions/get-data', 'GET', params, target, null, _cb);
    }
    
    var drawContent = function (data) {
        promotions = data.promotionKeys
        ele.promotionTable.html(data.htmlListPromotion)
    }

    var paging = function () {
        $(document).on('click', '.page-link', function() {
            var $url = $(this).data('href') 
            var target = ele.promotionTable
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

    var handleCreatePromotion = function () {
        ele.promotionCreateForm.on('submit', function () {
            var params = new FormData(ele.promotionCreateForm[0])
            let _cb = function (rs) {
                if (rs.status) {
                    loadData()
                    $.app.pushNoty('success')
                    ele.modalCreate.modal('hide')
                } else {
                    $.app.pushNoty('error', rs.message)
                }
            }
            var url = $.app.vars.url + '/admin/promotions/store'

            $.ajax({
                url : url,
                type : 'POST',
                data : params,
                processData: false,
                contentType: false,
                success : _cb,
                error : function (rs) {
                    $.app.pushNoty('error')
                }
            })
        })
    }

    var handleUpdatePromotion = function () {
        $(document).on('click', '.update-btn', function() {
            var pids = []
            var pid = $(this).data('id')
            var promotion = promotions[pid]
            ele.nameUd.val(promotion.name)
            ele.descUd.val(promotion.description)
            ele.discountUd.val(promotion.discount)
            $.each(promotion.products, function(i, item) {
                pids.push(item.id)
            })
            ele.productUd.val(pids)
            ele.productUd.select2()
            ele.thumbUd.css('background-image', 'url(' + $.app.vars.url + '/storage/' + promotion.thumb + ')')
            ele.promotionId.val(pid)
        })

        ele.promotionUpdateForm.on('submit', function () {
            var params = new FormData(ele.promotionUpdateForm[0])
            let _cb = function (rs) {
                if (rs.status) {
                    loadData()
                    $.app.pushNoty('success')
                    ele.modalUpdate.modal('hide')
                } else {
                    $.app.pushNoty('error', rs.message)
                }
            }
            var url = $.app.vars.url + '/admin/promotions/update'
            $.ajax({
                url : url,
                type : 'POST',
                data : params,
                processData: false,
                contentType: false,
                success : _cb,
                error : function (rs) {
                    $.app.pushNoty('error')
                }
            })
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
                    $.app.ajax($.app.vars.url + '/admin/promotions/delete', 'POST', params, '', null, _cb)
                }
            })
        })
    }

    var handleDeleteItem = function () {
        $(document).on('click', '.delete-btn', function(e) {
            let $id = $(this).data('id')
            let name = promotions[$id].name
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
                'text' : 'Xóa khuyến mãi: ' + name,
                'callback' : function () {
                    $.app.ajax($.app.vars.url + '/admin/promotions/delete', 'POST', params, '', null, _cb)
                }
            })
        })
    }
}