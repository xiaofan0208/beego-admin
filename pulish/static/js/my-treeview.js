/*
var menudata = [{
    "id": 1,
    "icon": "fas fa-tachometer-alt",
    "link": "/admin",
    "title": "首页",
    "active": true,
    "children": [{
        "id": 2,
        "icon": "fas fa-circle",
        "link": "/admin/backenduser",
        "title": "菜单二",
        "active": false,
    }, {
        "id": 3,
        "icon": "fas fa-circle",
        "link": "#",
        "title": "菜单三",
        "active": true,
    }]
}, {
    "id": 4,
    "icon": "fas fa-th",
    "link": "#",
    "title": "菜单四",
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
        var html = '<ul id="sidebar" class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">'
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
            var link = menudata[i].link
            var has = ""

            if (menudata[i].active) {
                active = "active"
                open = "menu-open"
            }
            if(link == ""){
                link = "#"
            }
            if (menudata[i].children != undefined && menudata[i].children.length > 0)  {
                has = "has-treeview"
            }
            html += '<li class="nav-item  ' + has + ' ' +  open + '">\
            <a href="' + link + '" class="nav-link ' + active + '">\
            <i class="nav-icon ' + menudata[i].icon + '"></i>\
            <p>' + menudata[i].title;
            if (menudata[i].children != undefined && menudata[i].children.length > 0) {
                html += '<i class="right fas fa-angle-left"></i>'
            }
            html += '</p>\
             </a>'

            if (menudata[i].children != undefined && menudata[i].children.length > 0) {
                var childHtml = this.addMenuChild(menudata[i].children)
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