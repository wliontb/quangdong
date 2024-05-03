var CommentClass = function () {
    var ele = {}
    var vars = {
        datatable : {}
    }
    var comments = {}
    
    this.run = function () {
        this.init()
        this.bindEvents()
    }

    this.init = function () {
        ele.tableComment = $('#table-comment')
        ele.statusFilter = $('#status-filter')
        ele.btnUpdate = $('#kt_modal_update_comment_submit')
        ele.commentUser = $('#comment-user')
        ele.commentTime = $('#comment-time')
        ele.commentContent = $('#comment-content')
        ele.commentReply = $('#comment-reply')
        ele.commentStatus = $('#comment-status')
        ele.commentId = $('#comment-id')
        ele.modalUpdate = $('#kt_modal_update_comment')
        ele.searchFilter = $('#search-field')
        loadData()
    }

    this.bindEvents = function () {
        handleFilter()
        handleUpdateComment()
        paging()
    }

    var getParam = function () {
        var params = {
            status : ele.statusFilter.val(),
            text : ele.searchFilter.val(),
        }

        return params
    }

    var loadData = function () {
        var params = getParam()
        var target = ele.tableComment
        var _cb = function(rs) {
            drawContent(rs.data)
        }
        $.app.ajax($.app.vars.url + '/admin/comments/get-data', 'GET', params, target, null, _cb);
    }

    var drawContent = function (data) {
        ele.tableComment.html(data.htmlListComments)
        comments = data.commentKeys
    }

    var handleFilter = function () {
        ele.statusFilter.on('change', function () {
            loadData()
        })

        ele.searchFilter.on('keyup', function (e) {
            if (e.keyCode != 13) {
                return false
            }
            loadData()
        })
    }

    var handleUpdateComment = function (data) {
        $(document).on('click', '.update-btn', function() {
            var cid = $(this).data('id')
            var comment = comments[cid]
            ele.commentUser.html(comment.user.name)
            ele.commentTime.html(comment.created_at)
            ele.commentContent.html(comment.content)
            ele.commentReply.html(comment.replies ? comment.replies[0].content : '')
            ele.commentStatus.val(comment.active)
            ele.commentId.val(comment.id)
            ele.commentStatus.select2()
        })

        ele.btnUpdate.on('click', function() {
            var params = {
                cid : ele.commentId.val(),
                content : ele.commentReply.val(),
                status : ele.commentStatus.val(),
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
            $.app.ajax($.app.vars.url + '/admin/comments/update', 'POST', params, target, null, _cb)
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