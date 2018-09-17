---
layout: post
title: "cocos2dx跟随地图移动"
date: 2016-03-18
tags: cocos2dx
description: cocos2dx的地图
---
***

    void HelloWorld::setViewpointCenter(CCPoint position)
    {
        CCSize winSize = CCDirector::sharedDirector()->;getWinSize();
        float x = MAX(position.x, winSize.width / 2);
        float y = MAX(position.y, winSize.height / 2);
        x = MIN(x, (map->;getMapSize().width*map->;getTileSize().width) - winSize.width / 2);
        y = MIN(y, (map->;getMapSize().height*map->;getTileSize().height) - winSize.height / 2);
        CCPoint acturalPosition = ccp(x, y);
        CCPoint centerView = ccp(winSize.width / 2, winSize.height / 2);
        CCPoint viewPoint = ccpSub(centerView, acturalPosition);
        this->;setPosition(viewPoint);
    }

map是地图文件，需要这样获取：

    map = dynamic_cast<CCTMXTiledMap*>;(rootNode->;getChildByName("Map"));
