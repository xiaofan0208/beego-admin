    /*
        requestUrl: 请求地址
        columns ： 列表显示
        fixedNumber ： 固定列表(可为0)
    */
    var TableInit = function (requestUrl, columns, fixedNumber) {
        var tableId = '#tb_bootstrap-table'
        var oTableInit = new Object();
        //初始化Table
        oTableInit.Init = function () {
            $(tableId).bootstrapTable({
                url: requestUrl, //请求后台的URL（*）
                method: 'get', //请求方式（*）
                toolbar: '#toolbar', //工具按钮用哪个容器
                striped: true, //是否显示行间隔色
                cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true, //是否显示分页（*）
                sortable: true, //是否启用排序
                sortOrder: "asc", //排序方式
                queryParams: oTableInit.queryParams, //传递参数（*）
                sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1, //初始化加载第一页，默认第一页
                pageSize: 10, //每页的记录行数（*）
                pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
                search: false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                strictSearch: true,
                showColumns: true, //是否显示所有的列
                showRefresh: true, //是否显示刷新按钮
                minimumCountColumns: 2, //最少允许的列数
                clickToSelect: true, //是否启用点击选中行
                //height: 500, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                uniqueId: "ID", //每一行的唯一标识，一般为主键列
                showToggle: true, //是否显示详细视图和列表视图的切换按钮
                cardView: false, //是否显示详细视图
                detailView: false, //是否显示父子表
                columns: columns,
                fixedColumns: true,
                fixedNumber: fixedNumber, //固定列数
            });
        };

        //得到查询的参数
        oTableInit.queryParams = function (params) {
            var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                limit: params.limit, //页面大小
                offset: params.offset, //页码
                //    page: (params.offset / params.limit) + 1, //页码
                sort: params.sort, //排序列名 
                sortOrder: params.order, //排位命令（desc，asc） 
                search: getSearchParam()
            };
            return temp;
        };

        // 获取搜索参数
        function getSearchParam() {
            var search = {}
            $("#formSearch .search").each(function () {
                var key = $(this).attr("id")
                var value = $.trim($(this).val())
                if (key != undefined && value != "") {
                    search[key] = value
                }
            })
            return JSON.stringify(search)
        }
        // 点击搜索
        $("#btnSearch").click(function () {
            if (getSearchParam() == "{}") {
                return false
            }
            $(tableId).bootstrapTable('refresh');
        })
        // 重置搜索
        $("#btnReset").click(function () {
            $("#formSearch .filter-search").each(function () {
                $(this).val('')
            })
            $(tableId).bootstrapTable('refresh');
        })

        return oTableInit;
    };


    var ButtonInit = function () {
        var oInit = new Object();
        var postdata = {};
        //初始化页面上面的按钮事件
        oInit.Init = function () {
            var tableId = '#tb_bootstrap-table'
            // 新增
            $("#btn_add").click(function () {
                console.log("-----新增---  ")
            })

            // 批量删除
            $("#btn_delete").click(function () {
                var ids = []
                var rows = $(tableId).bootstrapTable('getSelections');
                for (var i = 0; i < rows.length; i++) {
                    ids.push(rows[i].Id)
                }
                showModal(ids.join(","))
            })
        };
        return oInit;
    };



    /* 用法：             
            var btnGroup = new Array()
            var one = {
                href: "http://www.baidu.com",
                name: "百度",
                click: "test",   // 点击函数，参数为item
            }
            AddOperateBtnGroup(btnGroup, item)
     */
    function AddOperateBtnGroup(btnGroup, item) {
        if (btnGroup == undefined || btnGroup.length == 0) {
            return
        }

        var html = ""
        html += "<div class='btn-group'>\
            <button type='button' class='btn btn-info'>操作</button>\
            <button type='button' class='btn btn-info dropdown-toggle dropdown-icon' data-toggle='dropdown' aria-expanded='false'>\
            <span class='sr-only'>下拉切换</span>\
            <div class='dropdown-menu' role='menu' style=''>"

        for (var i = 0; i < btnGroup.length; i++) {
            if (i != 0 && i % 3 == 0) {
                html += "<div class='dropdown-divider'></div>"
            }
            // 如果存在点击事件，则优先处理点击事件
            if (btnGroup[i].click != '') {
                html += '<a class="dropdown-item"   href="javascript:void(0)"  onclick=eval(' + btnGroup[i].click +
                    '(' +
                    JSON.stringify(item) + '))>' + btnGroup[i].name + '</a>'
            } else {
                html += '<a class="dropdown-item"   href="javascript:void(0)"  onclick=openurl("' + btnGroup[i].href +
                    '") >' + btnGroup[i].name + '</a>'
            }
        }
        html += "</div>\
            </button>\
        </div>";
        return html
    }

    function openurl(url) {
        window.location.href = url // 当前页面
        // window.open(url,'_blank'); // 新页面
    }