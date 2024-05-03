var ProductDetailClientClass = function () {
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
        ele.btnComment = $('#btn-submit-comment')
        ele.contentCmt = $('#comment-content')
        ele.listComment = $('#list-comment-card')

        loadComment()
    }

    this.bindEvents = function () {
        handleComment()
        paging()
    }

    var handleComment = function () {
        ele.btnComment.on('click', function() {
            var params = {
                content : ele.contentCmt.val(),
                productId : options.productId,
            }
            var target = ele.btnComment
            var _cb = function (rs) {
                var data = rs.data
                if (rs.status) {
                    $.app.pushNoty('success', 'Bạn đã gửi thành công, bình luận của bạn sẽ được kiểm duyệt trước khi hiển thị.')
                    ele.contentCmt.val('')
                } else {
                    $.app.pushNoty('error', rs.message)
                }
            }
            $.app.ajax($.app.vars.url + '/product/post-comment', 'POST', params, target, null, _cb);
        })
    }

    var loadComment = function () {
        var params = {
            productId : options.productId,
        }
        var target = ele.listComment
        var _cb = function(rs) {
            drawComment(rs.data)
        }
        $.app.ajax($.app.vars.url + '/product/loadcomment', 'GET', params, target, null, _cb);
    }

    var drawComment = function (data) {
        ele.listComment.html(data.htmlListComments)
    }

    var paging = function () {
        $(document).on('click', '.page-link', function() {
            var $url = $(this).data('href')
            var target = ele.listComment
            var _cb = function(rs) {
                var data = rs.data
                drawComment(data)
            }
            $.app.ajax($url, 'GET', '', target, null, _cb)
        })
    }
}