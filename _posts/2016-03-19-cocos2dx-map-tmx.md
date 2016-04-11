---
layout: post
title: "cocos2dx如何从tmx地图中获取遮挡层并在物理世界中实现"
date: 2016-03-19
tags: cocos2dx
description: cocos2dx的地图
---
<p>首先让我们获取到遮挡层:</p>
<pre class="lang-c++" data-lang="c++">auto wall = map-&gt;getLayer("wall");\n</pre>
<p>其中wall为遮挡层名称，在制作tmx地图时我们可以设置这个，map是地图对象可以这样获取：</p>
<pre class="">map = dynamic_cast&lt;CCTMXTiledMap*&gt;(rootNode-&gt;getChildByName("Map"));\n</pre>
<p>由于是用cocosstudio做的界面，所以直接getChildByName，然后，遍历遮挡层，并为其添加刚体body：</p>
<pre class="">int x = wall-&gt;getLayerSize().width;\r\n	int y = wall-&gt;getLayerSize().height;\r\n	for (int i = 0; i &lt; x; i++) {\r\n		for (int u = 0; u &lt; y; u++) {\r\n			auto sp = wall-&gt;getTileAt(Vec2(i, u));\r\n			if (sp == NULL) {\r\n				continue;\r\n			}\r\n			auto spbody = PhysicsBody::createBox(Size(32, 32));\r\n			spbody-&gt;setDynamic(false);\r\n			sp-&gt;setPhysicsBody(spbody);\r\n		}\r\n	}\n</pre>
<p>其中setDynamic让其设定为静态刚体.</p>