---
layout: post
title: "Python上爬虫学习1-----环境搭建"
date: 2016-08-30
tags: python scrapy
description: 在windows上搭建python环境
---
***

##1.安装python2.7：

    https://www.python.org/downloads/release/python-2712/

选择对应版本下载安装，安装完成之后设置环境变量：

    path：C:\Python27;C:\Python27\Scripts;

##2.安装pip

[pip安装文件](http://pan.baidu.com/s/1qYgY3Q8)

然后cmd到上面这个文件目录执行：
    
    python get-pip.py

##3.安装lxml

    http://www.lfd.uci.edu/~gohlke/pythonlibs/#lxml

下载对应版本，然后cmd到文件目录：

    pip install 文件名.whl

##4.安装scrapy

    pip install scrapy

搞定！