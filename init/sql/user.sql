DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(100) NOT NULL COMMENT '用户名',
  `phone` varchar(100) NOT NULL COMMENT '手机号码',
  `email` varchar(100) NOT NULL COMMENT '邮件',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `gender` tinyint(1) NOT NULL COMMENT '性别：0表示男，1表示女',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
