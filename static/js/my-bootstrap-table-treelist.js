
    var TableInit = function (requestUrl, columns  ,  treeColumn ) {
        var $table = $("#tb_bootstrap-table");

        var oTableInit = new Object();
        oTableInit.Init = function () {
            $table.bootstrapTable({
                url: requestUrl, //请求后台的URL（*）
                method: 'post', //请求方式（*）
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                toolbar: '#toolbar', //工具按钮用哪个容器
                striped: true, //是否显示行间隔色
                cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true, //是否显示分页（*）
                sortable: false, //是否启用排序
                sidePagination: "server", //分页方式：client客户端分页client客户端分页，server服务端分页（*）
                pageNumber: 1, //初始化加载第一页，默认第一页
                pageSize: 9, //每页的记录行数（*）
                pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
                // height: 520, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                uniqueId: "ID", //每一行的唯一标识，一般为主键列
                queryParamsType: "undefined",
                onDblClickCell: function (index, value, row) {
                    details(row.id);
                },
                queryParams: function queryParams(params) { //设置查询参数  
                    var param = {
                        pageNumber: params.pageNumber,
                        pageSize: params.pageSize,
                    };
                    return param;
                },
                columns: columns,
                treeShowField: 'title',
                parentIdField: 'pid',
                onLoadSuccess: function (data) {
                    $table.treegrid({
                        initialState: 'expanded', //展开
                        treeColumn: treeColumn, //指明第几列数据改为树形
                        expanderExpandedClass: 'fa fa-minus',
                        expanderCollapsedClass: 'fa fa-plus',
                        onChange: function () {
                            $table.bootstrapTable('resetWidth');
                        }
                    });
                }
            });
        }

        return oTableInit;
    }

    function details(id) {
    }

    var ButtonInit = function () {
        var oInit = new Object();
        oInit.Init = function () {

        }
        return oInit;
    }