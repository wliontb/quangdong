var ProductClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    
    this.run = function () {
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.productTable = $('#kt_ecommerce_products_table')
        ele.searchField = $('#search-field')
        ele.statusFilter = $('#status-filter')
        ele.categoryFilter = $('#category-filter')

        loadData()
    }

    this.bindEvents = function () {
        handleUpdate()
        handleDelete()
        handleFilter()
    }

    var getParam = () => {
        var params = {
            status : ele.statusFilter.val(),
            category : ele.categoryFilter.val(),
        }
        for(var i in params) {
            if (!params[i]) params[i] = '';
        }
        return params
    }

    var loadData = () => {
        var params = getParam()
        var target = ele.productTable
        var _cb = (rs) => {
            data = rs.data
            drawContent(data)
        }

        $.app.ajax($.app.vars.url + '/admin/products/get-data', 'GET', params, target, null, _cb);
    }

    var drawContent = function(data) {
        let dttableid = 'product-list';
        if (typeof vars.datatable[dttableid] !== 'undefined') {
            vars.datatable[dttableid].destroy()
        }
        ele.productTable.html(data.htmlProductTable)
        vars.datatable[dttableid] = ele.productTable.DataTable({
            pageLength: 10,
            retrieve: true,
            searching: true,
            lengthChange: false,
            pagination: true,
            aaSorting: [],
            info: false,
            dom: "lrtip",
            responsive: true,
            autoWidth: false,
            columnDefs: [{
                targets: [0,6],
                orderable: false,
                visible: true
            }],
        })
        
        ele.searchField.on('keyup', function(e) {
            var text = e.target.value
            vars.datatable[dttableid].column(1).search(text).draw()
        })
    }

    var handleFilter = function() {
        ele.statusFilter.on('change', function (e) {
            loadData()
        })

        ele.categoryFilter.on('change', function (e) {
            loadData()
        })
    }

    var handleUpdate = function() {
        $(document).on('click', '.update-btn', function() {
            let $id = $(this).data('id')
            let name = $(this).data('name')
            $.app.pushConfirmNoti({
                'title' : 'Cập nhật sản phẩm',
                'text' : 'Sản phẩm' + ': ' + name,
                'callback' : function () {
                    window.location.href = $.app.vars.url + '/admin/products/show/' + $id
                }
            })
        })
    }

    var handleDelete = function() {
        $(document).on('click', '.delete-btn', function() {
            let $id = $(this).data('id')
            let name = $(this).data('name')
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
                'title' : 'Xóa sản phẩm',
                'text' : 'Sản phẩm' + ': ' + name,
                'callback' : function () {
                    $.app.ajax($.app.vars.url + '/admin/products/delete', 'POST', params, '', null, _cb);
                }
            })
        })
    }
}