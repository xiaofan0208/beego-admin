package main

import (
	_ "beego-admin/routers"
	"os"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	xadmin "github.com/xiaofan0208/go-xadmin"
	_ "github.com/xiaofan0208/go-xbase/utils"
)

// 初始化日志
func initLog() {
	logPath := beego.AppConfig.DefaultString("log_path", "./logs")
	if logPath != "" {
		if _, err := os.Stat(logPath); err != nil {
			err = os.Mkdir(logPath, os.ModePerm)
			if err != nil {
				beego.Error(err.Error())
			}
		}
	}

	filename := logPath + "/test.log"
	logs.SetLogger(logs.AdapterMultiFile,
		`{"filename":"`+filename+`","separate":[ "error", "info", "debug"]}`)
	beego.Info("初始化日志")
}

// 初始化数据库
func initDb() {
	beego.Info("初始化数据库")
	if beego.AppConfig.String("runmode") == "dev" {
		orm.Debug = true
	}

	mysqlStr := beego.AppConfig.String("mysql_default_config")
	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterDataBase("default", "mysql", mysqlStr, 30)

}

func initStatic() {
	beego.SetStaticPath("/static", "static")
}

func initArgs() {
	args := os.Args
	for _, v := range args {
		// 创建数据库
		if v == "-syncdb" {
			os.Exit(0)
		} else if v == "-initadmin" { // 更新管理员信息
			xadmin.InitAdmin()
			os.Exit(0)
		} else if v == "-initrbac" { // 更新菜单等
			xadmin.InitMenus()
			os.Exit(0)
		}
	}
}

func main() {
	initLog()
	initDb()
	initStatic()

	initArgs()
	beego.Run()
}
