
-- 后台管理员信息表
CREATE TABLE `admin_backenduser` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '名称',
  `email` varchar(80) NOT NULL DEFAULT '' COMMENT '邮箱',
  `mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '手机号',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `salt` varchar(32) NOT NULL DEFAULT ''  COMMENT '加盐',
  `is_admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是管理员',
  `deleted` tinyint(1) NOT NULL DEFAULT '0'  COMMENT '是否删除',
  `created` bigint(20) NOT NULL DEFAULT '0'  COMMENT '创建时间',
  `updated` bigint(20) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `active` tinyint(1) NOT NULL DEFAULT '1'  COMMENT '是否可以使用，默认是',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- 后台用户使用记录
CREATE TABLE `admin_backenduser_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL  COMMENT  ,
  `create_user_id` bigint(20) DEFAULT NULL,
  `update_user_id` bigint(20) DEFAULT NULL,
  `logout` bigint(20) DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `ip` varchar(255) NOT NULL DEFAULT '',
  `created` bigint(20) NOT NULL DEFAULT '0',
  `updated` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `admin_backenduser_record_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- 后台权限资源表
CREATE TABLE `admin_rbac_resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '资源标题',
  `pid` bigint(20) NOT NULL DEFAULT '0' COMMENT '父资源ID',
  `type` bigint(20) NOT NULL DEFAULT '0' COMMENT '类型 1：panel 2：菜单 3：按钮',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '名称：唯一标记',
  `icon` varchar(255) NOT NULL DEFAULT '' COMMENT '图标',
  `level` bigint(20) NOT NULL DEFAULT '0' COMMENT '层级',
  `link` varchar(255) NOT NULL DEFAULT '' COMMENT '链接',
  `url_for` varchar(255) NOT NULL DEFAULT '' COMMENT 'URL',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `order` bigint(20) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '状态：1-启用 2-禁用',
  `created` bigint(20) NOT NULL DEFAULT '0',
  `updated` bigint(20) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- 后台权限角色表
CREATE TABLE `admin_rbac_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) NOT NULL DEFAULT '0' COMMENT '父级角色',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '角色名称',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `type` bigint(20) NOT NULL DEFAULT '0' COMMENT '角色类型 1-基础角色',
  `level` bigint(20) NOT NULL DEFAULT '0' COMMENT '角色层级',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '状态：1-启用 2-禁用',
  `created` bigint(20) NOT NULL DEFAULT '0',
  `updated` bigint(20) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 权限表
CREATE TABLE `admin_rbac_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) NOT NULL DEFAULT '0' COMMENT '父权限',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '权限名称',
  `created` bigint(20) NOT NULL DEFAULT '0',
  `updated` bigint(20) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `admin_rbac_roleresource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) NOT NULL DEFAULT '0' COMMENT '角色ID',
  `created` bigint(20) NOT NULL DEFAULT '0',
  `updated` bigint(20) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

