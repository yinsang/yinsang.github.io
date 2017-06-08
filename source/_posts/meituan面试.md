---
title: meituan面试
date: 2017-06-02 15:13:23
tags:
---

<link rel="stylesheet" href="{% asset_path meituan.css %}" />
6月1号去美团面试了一场，受益匪浅。先暂时讲问题列出来，后续再挨个找答案。
面试结果，暂未出。
总结如下：
# css方面
## q: [选择器优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
a:有！important id class tag，其实漏说了伪元素选择器:before :after, 属性选择器，和伪类选择器
：hover
q: 权重计算呢?
网上说是十倍关系，id比class大十倍，实则无限大.
q: 真的无限大吗？ 如果是230个class选择器呢？这里没有说256，是怕提示我内存的溢出。哈哈。
a: 也干不掉。
其实心里很虚。我说网上说的10倍，其实是无限大。
其实是按内存进行存储的，各浏览器对其解析不同，用256个class可以在firefox
干掉id选择器，chrome里不能。
详情在：[深入理解CSS权重(优先级)](http://justcoding.iteye.com/blog/2312385)

在思考问题时，不仅仅要从所学入手，要从底层去观察问题，想问题。像我就从来没有做
过这么多选择器的实验，我只做过11个的实验，不能干掉id，就认为id比class无限大。
一直以为css蛮简单的，就没有注重学，但面试的过程让我改观了这个看法。也明白为什么张鑫旭大神说自己一直在专研css这么多年。
css有蛮多东西需要学习的。很多基础需要打牢。


<test id="id" class="c000 c001 c002 c003 c004 c005 c006 c007 c008 c009 c010 c011 c012 c013 c014 c015 c016 c017 c018 c019 c020 c021 c022 c023 c024 c025 c026 c027 c028 c029 c030 c031 c032 c033 c034 c035 c036 c037 c038 c039 c040 c041 c042 c043 c044 c045 c046 c047 c048 c049 c050 c051 c052 c053 c054 c055 c056 c057 c058 c059 c060 c061 c062 c063 c064 c065 c066 c067 c068 c069 c070 c071 c072 c073 c074 c075 c076 c077 c078 c079 c080 c081 c082 c083 c084 c085 c086 c087 c088 c089 c090 c091 c092 c093 c094 c095 c096 c097 c098 c099 c100 c101 c102 c103 c104 c105 c106 c107 c108 c109 c110 c111 c112 c113 c114 c115 c116 c117 c118 c119 c120 c121 c122 c123 c124 c125 c126 c127 c128 c129 c130 c131 c132 c133 c134 c135 c136 c137 c138 c139 c140 c141 c142 c143 c144 c145 c146 c147 c148 c149 c150 c151 c152 c153 c154 c155 c156 c157 c158 c159 c160 c161 c162 c163 c164 c165 c166 c167 c168 c169 c170 c171 c172 c173 c174 c175 c176 c177 c178 c179 c180 c181 c182 c183 c184 c185 c186 c187 c188 c189 c190 c191 c192 c193 c194 c195 c196 c197 c198 c199 c200 c201 c202 c203 c204 c205 c206 c207 c208 c209 c210 c211 c212 c213 c214 c215 c216 c217 c218 c219 c220 c221 c222 c223 c224 c225 c226 c227 c228 c229 c230 c231 c232 c233 c234 c235 c236 c237 c238 c239 c240 c241 c242 c243 c244 c245 c246 c247 c248 c249 c250 c251 c252 c253 c254 c255"></test>  
上面的色块在chrome里为蓝，在firefox为红。
##  两栏布局一侧定宽
我回答一边float left一边overflow auto就行了。
面试官说我想多了，说最简单的定宽的。我有点萌比。。。
右侧margin-left就可以解决，最粗暴的左侧float left；右侧position absolute；left:100px;也可以
很多情况是css实现方式有多种多样，要掌握全的话才能明了其中原理，知道各项利弊和适用场景，才能更好的面对
复杂的情况。
两栏布局的相关找了很多博客没有说原理，最后还是在张鑫旭[CSS深入理解流体特性和BFC特性下多栏自适应布局](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)
这里找到了。
触发bfc的方式有很多种，display position overflow都可以
为什么一侧float或者position absolute一侧margin-left可以做两栏，因为div是流动的，可以撑满除margin border padding之外的width空间
触发bfc之后，右侧元素变成四方块，撑满布局
用left块的margin-right，padding-right，right块的padding-left都可以改二者距离。
3. margin叠加怎么办？

a：清除浮动，当时我以为是子元素的float left导致父元素塌陷，其实说的是margin叠加的问题。这里回答错了。
实际问题解决方案在这：[知乎](https://www.zhihu.com/question/19823139)
左右不会塌陷，塌陷是上下 或者父子。
上下的margin叠加需要用到float inline-block， absolute 
处理父子元素塌陷，要讲父元素做成bfc
div似乎在没有设置border padding时只是个伪块级，没有格式化上下文的能力，会被子margin撑破。设置padding即使是1px，也可以保证不被撑破。
续问：清除浮动为什么能不叠加？
a：不知道
其实父子的清除浮动也是创建了bfc。


4. q：怎么判断css样式生效
a： 在css里放置一个测试元素在最底下，用js测该元素的样式，生效则css已生效。
面试官说还有其他办法，我没有回答出来。
5. bfc都有哪些特性？
未回答出来
* 内部的Box会在垂直方向，从顶部开始一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生叠加
* 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* BFC的区域不会与float box叠加。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
* 计算BFC的高度时，浮动元素也参与计算。

# js方面
es6方面
写一个嵌套数据变一维数组的函数
a：
初级答案如下：
> var toOneArray = function(arr){
    if(Object.prototype.toString.call(arr) !== "[object Array]"){
        return "arguments is not an Array"
    }
    var returnArray = [];
    var callBack = function(arr){
        for(let i = 0, len = arr.length;i < len;i++){
            if(Object.prototype.toString.call(arr[i]) === "[object Array]"){
                callBack(arr[i])
            }else{
                returnArray.push(arr[i])
            }
        }
    }
    callBack(arr)
    return returnArray;
}

实际还能更好
思路就是这个思路。优化的部分是可以用forEach map


addEventLister第三个值得意义
a：true是捕获；false 冒泡；默认false


监听事件的工作原理

如果读过jquery源码，这个问题就能回答了。
我渐渐的学着深入得读下jquery源码
发现了一片[牛人的博客](http://www.cnblogs.com/aaronjs/p/3279314.html)
e.target 和currentTarget的区别
我回答e.target 是点击的节点
currentTarget是绑定的节点。
准确来讲，如果是
`ul>li>a>img`
`$ul.on("$li","click",fn)`
e.target 代表点击的那个li里面的img
e.currentTarget 代表当前li



# http方面
1. keep-alive是和谁保持联系，有什么用
我说和后台保持联系，也说了和后台交互要三次握手。
适用keep-Alive可以规避三次握手时间，属于优化部分。

2. http请求的代码
2，3，4，5开头的几个分别什么用？
只说了2是成功
3是重定向
4是找不到资源
5是服务器错误
具体的没有回答好。
[http状态码](http://www.lampweb.org/seo/5/10.html)

jsonp的工作原理
get和post的基本原理
跨域的时候，后台能得到你的传输数据吗？
fetch的两步分别是什么用？为什么两步？


# 总监面试，编程思想方面
写一个插件，关注点是什么？
做过什么值得骄傲的事儿？
实现插件的思路，一步步深入
