var CategoryProductCreateClass = function () {
    var ele = {}
    
    this.run = function () {
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.categoryAddForm = $('#kt_ecommerce_add_category_form')
        ele.name = $('input[name="category_name"]')
        ele.status = $('#kt_ecommerce_add_category_status_select')
        ele.description = $('#description')
        ele.submitBtn = $('#kt_ecommerce_add_category_submit')
        ele.parentCat = $('#kt_ecommerce_add_category_store_template')
        ele.statusColor = $('#kt_ecommerce_add_category_status')
        ele.catId = $('#cat-id')
        ele.formSubmit = $('#kt_ecommerce_add_category_form')

        // loadData()
    }

    this.bindEvents = function () {
        createCategory()
        changeStatus()
    }

    // var getParam = function () {
    //     var params = {

    //     }

    //     return params
    // }

    // var loadData = function (target) {
    //     var params = getParam()
    //     var _cb = function(rs) {
    //         var data = rs.data
    //         drawContent(data)
    //     }
    //     $.app.ajax($.app.vars.url + '/categories/product/get-data', 'GET', params, target, null, _cb)
    // }

    var createCategory = function () {
        ele.formSubmit.on('submit', function () {
            var target = ele.submitBtn
            var type = $(ele.submitBtn, $(this)).data('type')
            var params = {
                name : ele.name.val(),
                thumb : '',
                active : ele.status.val(),
                description : CKEDITOR.instances['description'].getData(),
                parent_id : ele.parentCat.val() === 'no_parent' ? null : ele.parentCat.val()
            }
            var _cb = function (rs) {
                if (rs.status) {
                    window.location.href = $.app.vars.url + '/admin/categories/'
                } else {
                    $.app.pushNoty('error')
                }
            }
            if (type == 'create') {
                $.app.ajax($.app.vars.url + '/admin/categories/store', 'POST', params, target, null, _cb)
            } else {
                params.id = ele.catId.val()
                $.app.ajax($.app.vars.url + '/admin/categories/update', 'POST', params, target, null, _cb)
            }
        })
    }

    var changeStatus = function () {
        ele.status.on('change', function () {
            ele.statusColor.toggleClass('bg-success').toggleClass('bg-danger')
        })
    }
}