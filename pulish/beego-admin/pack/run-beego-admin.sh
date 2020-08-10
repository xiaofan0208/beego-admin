# 运行 beego-admin 程序脚本
if [ -d "beego-admin" ];
then
    echo "dir exist"
else
    mkdir beego-admin
fi

tar -zxvf beego-admin.tar.gz  -C  beego-admin

chmod +x beego-admin/beego-admin

nohup beego-admin/beego-admin &
