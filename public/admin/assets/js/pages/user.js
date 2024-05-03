var UserClass = function () {
    var ele = {}
    var users = {}
    var vars = {
        datatable : {}
    }
    
    this.run = function () {
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.userTable = $('#kt_ecommerce_user_table')
        ele.formCreate = $('#kt_modal_add_user_form')
        ele.modalCreate = $('#kt_modal_add_user')
        ele.nameInput = $('#name-input')
        ele.status = $('#kt_modal_add_customer_billing')
        ele.searchField = $('#search-field')
        ele.statusFilter = $('#status-filter')
        ele.formUpdate = $('#kt_modal_update_user_form')
        ele.modalUpdate = $('#kt_modal_update_user')
        ele.nameInputE = $('#name-input-update')
        ele.statusE = $('#kt_modal_update_customer_billing')
        ele.userId = $('#user-id')
        
        loadData()
    }

    this.bindEvents = function () {
        handleDelete()
        handleFilter()
        paging()
    }

    var getParam = function () {
        var params = {
            'status' : ele.statusFilter.val(),
            'text' : ele.searchField.val(),
        }

        for(var i in params){
            if(!params[i]) params[i] = ''
        }
        return params
    }

    var loadData = function () {
        var params = getParam()
        var target = ele.userTable
        var _cb = function (rs) {
            var data = rs.data
            users = data.users
            drawContent(data)
        }
        $.app.ajax($.app.vars.url + '/admin/users/get-data', 'GET', params, target, null, _cb)
    }

    var drawContent = function (data) {
        ele.userTable.html(data.htmlUserTable)
    }

    var handleDelete = function () {
        $(document).on('click', '.delete-btn', function () {
            var $id = $(this).data('id')
            var params = {
                'id' : $id
            }
            var _cb = function (rs) {
                if (rs.status) {
                    loadData()
                    $.app.pushNoty('success')
                } else {
                    $.app.pushNoty('error')
                }
            }
            $.app.pushConfirmNoti({
                'title' : 'Bạn có chắn chắn thực hiện thao tác này?',
                'text' : 'Xóa người dùng',
                'callback' : function () {
                    $.app.ajax($.app.vars.url + '/admin/users/delete', 'POST', params, '', null, _cb)
                },
                'unConfirm' : function () {
                }
            })
        })
    }

    var handleFilter = function () {
        ele.statusFilter.on('change', function() {
            loadData()
        })
        ele.searchField.on('keyup', function (e) {
            if (e.keyCode != 13) {
                return false
            }
            loadData()
        })
    }

    var paging = function () {
        $(document).on('click', '.page-link', function() {
            var $url = $(this).data('href')
            var target = ele.tableComment
            var _cb = function(rs) {
                var data = rs.data
                drawContent(data)
            }
            $.app.ajax($url, 'GET', '', target, null, _cb)
        })
    }
}