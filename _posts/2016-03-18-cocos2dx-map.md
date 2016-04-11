---
layout: post
title: "cocos2dx跟随地图移动"
date: 2016-03-18
tags: cocos2dx
description: cocos2dx的地图
---
<pre class="lang-c++" data-lang="c++">void HelloWorld::setViewpointCenter(CCPoint position)\r\n{\r\n	CCSize winSize = CCDirector::sharedDirector()-&gt;getWinSize();\r\n	float x = MAX(position.x, winSize.width / 2);\r\n	float y = MAX(position.y, winSize.height / 2);\r\n	x = MIN(x, (map-&gt;getMapSize().width*map-&gt;getTileSize().width) - winSize.width / 2);\r\n	y = MIN(y, (map-&gt;getMapSize().height*map-&gt;getTileSize().height) - winSize.height / 2);\r\n\r\n	CCPoint acturalPosition = ccp(x, y);\r\n\r\n	CCPoint centerView = ccp(winSize.width / 2, winSize.height / 2);\r\n	CCPoint viewPoint = ccpSub(centerView, acturalPosition);\r\n	this-&gt;setPosition(viewPoint);\r\n}\n</pre>
<p>map是地图文件，需要这样获取：</p>
<pre class="lang-c++" data-lang="c++">map = dynamic_cast&lt;CCTMXTiledMap*&gt;(rootNode-&gt;getChildByName("Map"));\n</pre>