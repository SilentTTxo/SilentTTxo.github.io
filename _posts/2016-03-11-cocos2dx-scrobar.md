---
layout: post
title: "Cocos2dx的cocos studio制作的进度条使用"
date: 2016-03-11
tags: cocos2dx
description: cocos2dx的进度条
---
<p>
	真是蛋疼，在2.X版本的时候大家都说用ProgressTimer，但是在cocos studio里面制作的进度条是基于node的，所以在使用的时候要这样：
</p>
<pre class="lang-c++" data-lang="c++">auto layer = RootNode-&gt;getChildByName("control");\nauto bb = dynamic_cast&lt;LoadingBar*&gt;(layer-&gt;getChildByName("bloodBar"));\nbb-&gt;setPercent(50);\n</pre>
<p>另外，骨骼动画并不知道为啥stop不了，像这样：</p>
<pre class="lang-c++" data-lang="c++">auto skeleton = CSLoader::createTimeline("Skeleton.csb"); \nlog(run); \nskeleton-&gt;play("run", true); \n skeleton-&gt;setTag(5); \nPlayer-&gt;runAction(skeleton); \n\n \n----------------------------------- \n \nlog("stop run"); \nPlayer-&gt;stopActionByTag(5); \n</pre>
<p>所以最后只好暂停了，暂停是可行的，不知道为啥stop不行：</p>
<pre class="">Skeleton-&gt;pause();\nSkeleton-&gt;gotoFrameAndPause(0);\n</pre>