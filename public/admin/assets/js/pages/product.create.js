var ProductCreateClass = function() {
    var ele = {}
    var variations = {}
    var varSelected = []
    var allOptions = {}
    var product = {}
    
    this.run = (opt) => {
        variations = opt.variations
        allOptions = opt.options
        product = opt.product

        this.init()
        this.bindEvents()
    }

    this.init = () => {
        ele.summary = $('#summary')
        ele.description = $('#description')
        ele.btnCreate = $('#kt_ecommerce_add_product_submit')
        ele.status = $('#kt_ecommerce_add_product_status_select')
        ele.thumb = $('input[name="avatar"]')
        ele.category = $('#product-category')
        ele.name = $('input[name="product_name"]')
        ele.summary = $('input[name="summary"]')
        ele.description = $('#description')
        ele.sku = $('#sku-product')
        ele.price = $('#price-product')
        ele.quantity = $('#quantity-product')
        ele.formSubmit = $('#kt_ecommerce_add_product_form')
        ele.productId = $('#product-id')
        ele.tagField = $('#kt_ecommerce_add_product_tags')
        ele.modalAddTag = $('#kt_modal_add_tag')
        ele.addTagForm = $('#kt_modal_add_tag_form')
        ele.tagNameCreate = $('#tag-name')
        ele.addTagBtn = $('#submit-tag-btn')
        ele.brandField = $('#kt_ecommerce_add_product_brand_select')
    }

    this.bindEvents = () => {
        createProduct()
        createTag()
        handleUploadImage()
        handleRemoveImgUpdate()
    }

    var createProduct = () => {
        ele.formSubmit.on('submit', function() {
            var type = $(ele.btnCreate, $(this)).data('type')
            var params = new FormData(ele.formSubmit[0])
            let target = ele.btnCreate
            $.app.showLoading(target)
            $('input[name="images[]"]').each((i, el) => {
                params.append('medias['+ i +']', $(el).val())
            })
            let _cb = (rs) => {
                $.app.hideLoading(target)
                if (rs.status) {
                    $.app.pushNotyCallback({
                        'type' : 'success',
                        'callback' : function () {
                            window.location.href = $.app.vars.url + '/admin/products/'
                        }
                    })
                } else {
                    $.app.pushNoty('error')
                }
            }

            if(type === 'create') {
                var url = $.app.vars.url + '/admin/products/store'
            } else {
                params.append('id', ele.productId.val())
                var url = $.app.vars.url + '/admin/products/update'
            }

            $.ajax({
                url : url,
                type : 'POST',
                data : params,
                processData: false,
                contentType: false,
                success : _cb,
                error : function (rs) {
                    $.app.hideLoading(target)
                    $.app.pushNoty('error')
                }
            })
        })
    }

    var createTag = () => {
        ele.addTagForm.on('submit', function () {
            var params = {
                name : ele.tagNameCreate.val(),
            }
            var target = ele.addTagBtn
            var _cb = function (rs) {
                if (rs.status) {
                    ele.modalAddTag.modal('hide')
                    $.app.pushNotyCallback({
                        'type' : 'success',
                        'callback' : function () {
                            location.reload()
                        }
                    })
                } else {
                    $.app.pushNoty('error')
                }
            }
            $.app.ajax($.app.vars.url + '/admin/products/create-tag', 'POST', params, target, null, _cb)
        })
    }

    var uploadedFileMap = {}
    var handleUploadImage = function () {
        var myDropzone = new Dropzone("#kt_ecommerce_add_product_media", {
            url : $.app.vars.url + '/admin/products/upload-files', // Set the url for your upload script location
            paramName : "files", // The name that will be used to transfer the file
            maxFiles : 10,
            maxFilesize : 2, // MB
            parallelUploads : 5,
            addRemoveLinks : true,
            uploadMultiple : true,
            acceptedFiles : 'image/png, image/jpeg, image/jpg, image/gif',
            headers : {
                'X-CSRF-TOKEN' : $.app.vars.token,
            },
            success : function (file, rs) {
                let inputHtml = ''
                if (rs.status) {
                    rs.data.forEach(function(item) {
                        if (!uploadedFileMap.hasOwnProperty(file.name) && !Object.values(uploadedFileMap).includes(item)) {
                            inputHtml += `<input type='hidden' name="images[]" value="${item}">`
                            uploadedFileMap[file.name] = item
                        }
                    })
                    ele.formSubmit.append(inputHtml)
                }
            },
            errormultiple : function (files, rs) {
                $.app.pushNoty('error')
            },
            removedfile : function (file) {
                file.previewElement.remove()
                var name = ''
                if (typeof file.file_name !== 'undefined') {
                    name = file.file_name
                } else {
                    name = uploadedFileMap[file.name]
                }
                ele.formSubmit.find('input[name="images[]"][value="'+ name +'"]').remove()
            }
        });
    }

    var handleRemoveImgUpdate = function() {
        $('.dz-remove', $('.custom-dropzone-img')).on('click', function(e) {
            e.preventDefault()
            let imgTab = $(this).closest('.dz-preview')
            let thisUrl = $('img', $(imgTab)).attr('src')
            let url = thisUrl.replace(/^storage\//, "");
            $(imgTab).remove()
            $('input[name="current_images[]"][value="'+ url +'"]').remove()
        })
    }
}