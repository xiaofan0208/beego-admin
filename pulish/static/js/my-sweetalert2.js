/***
 * 
 * 
    <script src="/static/AdminLTE3.0/plugins/sweetalert2/sweetalert2.min.js"></script>
    <script src="/static/js/my-sweetalert2.js"></script>
 */
// SweetAlert2  弹窗
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
});
// 成功弹窗
function swalDefaultSuccess(title , callback) {
    Toast.fire({
        icon: 'success',
        title: title,
       
        onClose : function() {
            if(callback != undefined) {
                callback()
            }
        }
    })
}
// 错误弹窗提示
function swalDefaultError(title, callback) {
    Toast.fire({
        icon: 'error',
        title: title,
        background : "#d33",
        onClose : function() {
            if(callback != undefined) {
                callback()
            }
        }
    })
}

// 消息弹窗
function swalDefaultInfo(title, callback) {
    Toast.fire({
        icon: 'info',
        title: title,
        onClose : function() {
            if(callback != undefined) {
                callback()
            }
        }
    })
}

// 警告
function swalDefaultWarning(title, callback) {
    Toast.fire({
        icon: 'warning',
        title: title,
        onClose : function() {
            if(callback != undefined) {
                callback()
            }
        }
    })
}

// 问题弹窗
function swalDefaultQuestion(title, callback) {
    Toast.fire({
        icon: 'question',
        title: title,
        onClose : function() {
            if(callback != undefined) {
                callback()
            }
        }
    })
}