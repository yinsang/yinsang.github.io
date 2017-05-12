---
title: confuse and solution of css
date: 2017-05-08 09:21:57
tags:
---
主要是兼容问题和平时的一些经验

1. 用a链接做热点用position :absolute 定位时，需要用一个1像素的透明图片填充，不然无法兼容iE9及以下
`//img20.360buyimg.com/cms/jfs/t3112/51/4943664434/110/513391eb/585b7920Ndd65d421.png`
2. a链接里尽量不要用div。可以用span 手动设置`display:block`。
3. 
