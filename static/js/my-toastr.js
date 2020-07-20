
/**
 * 消息提示
 */

// 成功消息提示，背景色为浅绿色：
function success_prompt_alert(content , hiddenCallback ) {
    toastr = toastr_config(content , hiddenCallback)
    toastr.success(content);
}


function info_prompt_alert(content , hiddenCallback ) {
    toastr = toastr_config(content , hiddenCallback)
    toastr.info(content);
}

function warning_prompt_alert(content , hiddenCallback ) {
    toastr = toastr_config(content , hiddenCallback)
    toastr.warning(content);
}

// 错误消息提示，背景色为红色
function error_prompt_alert(content , hiddenCallback ) {
    toastr = toastr_config(content , hiddenCallback)
    toastr.error(content);
}



function toastr_config(content , hiddenCallback) {
    toastr.options = {
        closeButton: false, //是否显示关闭按钮
        debug: false, //是否使用debug模式
        progressBar: true, // 是否显示进度条，（设置关闭的超时时间进度条）
        positionClass: "toast-top-right", //弹出窗的位置
        onclick: null, // 点击消息框自定义事件
        showDuration: "300", // 显示动画的时间
        hideDuration: "1000", //  消失的动画时间
        // timeOut: "1000",  
        extendedTimeOut: "1000", //  加长展示时间
        showEasing: "swing", //  显示时的动画缓冲方式
        hideEasing: "linear", //   消失时的动画缓冲方式
        showMethod: "fadeIn", //   显示时的动画方式
        hideMethod: "fadeOut" //   消失时的动画方式
    };

    toastr.options.onShown = function () {}
    toastr.options.onHidden = function () {
        if (hiddenCallback != undefined) {
            hiddenCallback()
        }
    }
    toastr.options.onclick = function () {}
    toastr.options.onCloseClick = function () {}

    if (content == null) {
        content = '';
    }
    var len = content.length;
    if (len <= 10 && len > 0) {
        toastr.options.timeOut = "1800";
    } else if (len <= 20) {
        toastr.options.timeOut = "2800";
    } else if (len <= 30) {
        toastr.options.timeOut = "3800";
    } else if (len > 30) {
        toastr.options.timeOut = "4800";
    }
    return toastr
}