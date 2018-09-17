---
layout: post
title: "Cocos2dx的cocos studio制作的进度条使用"
date: 2016-03-11
tags: cocos2dx
description: cocos2dx的进度条
---
***

真是蛋疼，在2.X版本的时候大家都说用ProgressTimer，但是在cocos studio里面制作的进度条是基于node的，所以在使用的时候要这样：

    auto layer = RootNode->;getChildByName("control");
    auto bb = dynamic_cast<LoadingBar*>(layer->getChildByName("bloodBar"));
    bb->setPercent(50);

另外，骨骼动画并不知道为啥stop不了，像这样：

    auto skeleton = CSLoader::createTimeline("Skeleton.csb");
    log(run); 
    skeleton->play("run", true);
    skeleton->setTag(5);
    Player->runAction(skeleton);
    ----------------------------------- 
    log("stop run");
    Player->stopActionByTag(5);

所以最后只好暂停了，暂停是可行的，不知道为啥stop不行：

    Skeleton->pause();
    Skeleton->gotoFrameAndPause(0);
