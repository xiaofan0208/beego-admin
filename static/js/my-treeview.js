/*
var menudata = [{
    "id": 1,
    "icon": "fas fa-tachometer-alt",
    "link": "/admin",
    "name": "首页",
    "active": true,
    "children": [{
        "id": 2,
        "icon": "fas fa-circle",
        "link": "/admin/backenduser",
        "name": "菜单二",
        "active": false,
    }, {
        "id": 3,
        "icon": "fas fa-circle",
        "link": "#",
        "name": "菜单三",
        "active": true,
    }]
}, {
    "id": 4,
    "icon": "fas fa-th",
    "link": "#",
    "name": "菜单四",
    "active": false,
}];
*/

/***
 *  树形菜单
 * 
 */
class TreeMenuView {
    constructor(divId, menudata) {
        this.divId = divId
        this.menudata = menudata
    }

    createview() {
        if(this.menudata == undefined){
            return
        }
        var html = '<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">'
        html += this.addMenuChild(this.menudata)
        html += '</ul>'
        $(this.divId).empty()
        $(this.divId).append(html)
    }

    addMenuChild(menudata) {
        if (menudata == undefined || menudata.length == 0) {
            return ""
        }
        var html = ""
        for (var i = 0; i < menudata.length; i++) {
            var active = ""
            var open = ""
            if (menudata[i].active) {
                active = "active"
                open = "menu-open"
            }
            html += '<li class="nav-item has-treeview ' + open + '">\
            <a href="' + menudata[i].link + '" class="nav-link ' + active + '">\
            <i class="nav-icon ' + menudata[i].icon + '"></i>\
            <p>' + menudata[i].name;
            if (menudata[i].children != undefined && menudata[i].children.length > 0) {
                html += '<i class="right fas fa-angle-left"></i>'
            }
            html += '</p>\
             </a>'

            if (menudata[i].children != undefined && menudata[i].children.length > 0) {
                var childHtml = addMenuChild(menudata[i].children)
                if (childHtml != "") {
                    html += '<ul class="nav nav-treeview">'
                    html += childHtml
                    html += ' </ul>'
                }
            }
            html += '</li>'
        }
        return html
    }
}