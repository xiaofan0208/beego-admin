package main

import (
	_ "beego-admin/routers"
	"os"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
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

func main() {
	initLog()
	initDb()

	beego.Run()
}
