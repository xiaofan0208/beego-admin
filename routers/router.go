package routers

import (
	"beego-admin/controllers"

	"github.com/astaxie/beego"

	adminrouters "beego-admin/admin/routers"
)

func init() {
	// 后台路由
	adminrouters.Router()

	beego.Router("/", &controllers.MainController{})
}
