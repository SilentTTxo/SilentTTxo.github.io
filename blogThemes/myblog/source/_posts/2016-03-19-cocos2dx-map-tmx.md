---
layout: post
title: "cocos2dx如何从tmx地图中获取遮挡层并在物理世界中实现"
date: 2016-03-19
tags: cocos2dx
description: cocos2dx的地图
---
***

首先让我们获取到遮挡层:

    auto wall = map->getLayer("wall");

其中wall为遮挡层名称，在制作tmx地图时我们可以设置这个，map是地图对象可以这样获取：

    map = dynamic_cast<CCTMXTiledMap*>(rootNode->getChildByName("Map"));

由于是用cocosstudio做的界面，所以直接getChildByName，然后，遍历遮挡层，并为其添加刚体body：

    int x = wall->getLayerSize().width;
    int y = wall->getLayerSize().height;
    for (int i = 0; i < x; i++) {
        for (int u = 0; u < y; u++) {
            auto sp = wall->getTileAt(Vec2(i, u));
            if (sp == NULL) {
                continue;
            }
            auto spbody = PhysicsBody::createBox(Size(32, 32));
            spbody->setDynamic(false);
            sp->setPhysicsBody(spbody);
        }
    }

其中setDynamic让其设定为静态刚体.