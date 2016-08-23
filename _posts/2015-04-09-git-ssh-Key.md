---
layout: post
title: "git ssh Key"
date: 2015-04-09
tags: git
description: 配置git上传密钥
---
1、在本地建立一个文件夹，然后做一些全局变量的初始化

    git config --global user.name = "用户名或者用户ID"
    git config --global user.email = "邮箱"

这两个选项会在以后的使用过程中自动添加到代码中。

2、创建验证用的公钥
这个是比较复杂和困扰大多数人的地方，因为 git 是通过 ssh 的方式访问资源库的，所以需要在本地创建验证用的文件。
使用命令：

    ssh-keygen -C you email address@gmail.com -t 

rsa会在用户目录 ~/.ssh/ 下建立相应的密钥文件
可以使用

     ssh -v git@github.com 
 
 命令来测试链接是否畅通

3、上传公钥
* 在 github.com 的界面中 选择右上角的 Account Settings，然后选择 SSH Public Keys ，选择新加。
* Title 可以随便命名，Key 的内容拷贝自 ~/.ssh/id_rsa.pub 中的内容，完成后，可以再使用 ssh -v git@github.com 进行测试。
