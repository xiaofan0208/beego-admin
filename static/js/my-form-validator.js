	/*   表单验证
	 *   tableId : 表单ID （如：#BackenduserForm）
	 * 	 JumpURL : 跳转URL
	 * 	 fields  ：验证参数
	 */
	function Validator(tableId , JumpURL , fields ){
		$(tableId).bootstrapValidator({
			message: 'This value is not valid',
			//提供输入验证图标提示
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: fields,
		}).on('success.form.bv', function(e){ //点击提交之后
			e.preventDefault();
			var $form = $(e.target);
			var bv = $form.data('bootstrapValidator');

			// Use Ajax to submit form data 提交至form标签中的action，result自定义
			$.post($form.attr('action'), $form.serialize(), function(result) {
				//恢复submit按钮disable状态。
				$(tableId).bootstrapValidator('disableSubmitButtons', false);
				//跳转
				if(result != undefined && result.code == 0 ) {
					swalDefaultSuccess("正在跳转" , function(){
						window.location.href=JumpURL
					})
				}else{
					swalDefaultError(result.msg)
				}
			});
		})

		// 保存提交
		$("#btnFormSubmit").click(function(){
			$(tableId).bootstrapValidator('validate');
		})
	}