---
layout: post
title: "搭建multicraft后台管理面板"
date: 2015-04-02
tags: multicraft MC
description: 搭建multicraft
---
***

有个好基友在做MC的服务器，看到他在淘宝上租的服务器是基于multicraft系统的，所以就尝试搭建了一下，大概就遇到了一下几个问题：
开门红，有一个什么鬼wring，大概就是有一个文件夹protected有问题，按照他提供的wiki解决了，首先打开apache2配置文件：

	sudo gedit /etc/apache2/apache2.conf

将所有的AllowOverride None 改成AllowOverride All;
将

	/var/www/html/multicraft/protected

文件夹复制去别处，再修改index.php和api.php中的路径，记得把dirname(__FILE__)删掉;

然后一步一步来就行了，在最后的startu如果不行，就用

	sudo /home/minecraft/multicraft/bin/multicraft -nv start
一步一步调试，最开始我打不开是因为ftp端口冲突，去multicraft.conf修改一下ftp端口就行了;
