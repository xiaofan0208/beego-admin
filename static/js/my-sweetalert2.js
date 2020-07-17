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
    timer: 3000
});
// 成功弹窗
function swalDefaultSuccess(title) {
    Toast.fire({
        icon: 'success',
        title: title
    })
}
// 错误弹窗提示
function swalDefaultError(title) {
    Toast.fire({
        icon: 'error',
        title: title
    })
}

// 消息弹窗
function swalDefaultInfo(title) {
    Toast.fire({
        icon: 'info',
        title: title
    })
}

// 警告
function swalDefaultWarning(title) {
    Toast.fire({
        icon: 'warning',
        title: title
    })
}

// 问题弹窗
function swalDefaultQuestion(title) {
    Toast.fire({
        icon: 'question',
        title: title
    })
}