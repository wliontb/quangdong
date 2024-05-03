var CategoryClientClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var categoryId = 0
    var options = {}
    
    this.run = function (opt) {
        options = opt
        categoryId = options.categoryId
        this.init()
        this.bindEvents()

        ele.sortFilter.select2({
            minimumResultsForSearch: 10,
        })
    }

    this.init = function () {
        ele.categoryTable = $('#list-product')
        ele.sortFilter = $('.sort-filter')
        ele.priceFilter = $('input[name="r_price"]')
        ele.brandFilter = $('input[name="r_brand"]')
        ele.tagFilter = $('input[name="r_tag"]')
        ele.qtyProductDesc = $('.qty-product-desc')

        loadData()
    }

    this.bindEvents = function () {
        handleFilter()
        paging()
    }

    var getParam = function () {
        var params = {
            sort : ele.sortFilter.val(),
            price : $('input[name="r_price"]:checked').val(),
            brands : [],
            tags : [],
        }
        $.each(ele.brandFilter, function(i, item) {
            if ($(item).prop('checked')) {
                params.brands.push($(item).val())
            }
        })
        $.each(ele.tagFilter, function(i, item) {
            if ($(item).prop('checked')) {
                params.tags.push($(item).val())
            }
        })
        for(var i in params) {
            if(!params[i]) params[i] = ''
        }
        return params
    }

    var loadData = function (target) {
        var params = getParam()
        var target = ele.categoryTable
        var _cb = function(rs) {
            var data = rs.data
            ele.categoryTable.html(data.listProductHtml)
            ele.qtyProductDesc.text(`Hiển thị ${data.products.per_page} trên ${data.products.total} sản phẩm`)
        }
        $.app.ajax($.app.vars.url + '/category/' + categoryId + '/load-product', 'GET', params, target, null, _cb);
    }

    var handleFilter = function() {
        ele.sortFilter.on('change', function() {
            loadData()
        })
        ele.priceFilter.on('change', function() {
            loadData()
        })
        ele.brandFilter.on('change', function() {
            loadData()
        })
        ele.tagFilter.on('change', function() {
            loadData()
        })
    }

    var paging = function () {
        $(document).on('click', '.page-link', function() {
            var $url = $(this).data('href')
            var target = ele.categoryTable
            var _cb = function(rs) {
                var data = rs.data
                ele.categoryTable.html(data.listProductHtml)
                ele.qtyProductDesc.text(`Hiển thị ${data.products.per_page} trên ${data.products.total} sản phẩm`)
            }
            $.app.ajax($url, 'GET', {}, target, null, _cb)
        })
    }
}