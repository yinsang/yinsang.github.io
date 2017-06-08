---
title: confuse and solution of js
date: 2017-05-08 09:21:14
tags:
---
1. 比较
数字、字符串、boolean之间的比较大小，会转换成number而字符串如果不是数字类型（"12"）的会转换成NaN怎么比较都是false。
例如 `"0" == true`输出false，因为变成了`0 ==
1`所以在编程中少用==多用===。还有人认为===更快。少了隐式转化，当然是快的。
2. 在研究Array对象时发现其length最大值是2的32次方-1，即4294967295;碰见这种极限的，一定要搞搞事情。但如果设置了4294967296后并没有报错，但是length依然是4294967295；很是疑惑。如果这个大于length的值把之前的数值键位占用了，那肯定会有少的，用for循环了所有键位赋值，chrome爆炸了。去网上搜了下，发现其实则不然。
[阮一峰博客-数组](http://javascript.ruanyifeng.com/grammar/array.html)中说的比较详细。array实际也是对象，length做了规定值。大于length
max的变成了字符串，相当于自定义属性。故而不会报错。这就很好理解了
3. 在很久一段时间，都以为异步一定比同步慢，这是错误的。同步执行也需要时间，异步的过程甚至会在下一个语句执行前就直接走了。有的异步非常快。比如我做了测试，先是个ajax请求，然后console.log
一下ajax中success的赋值。发现直接就有了。只因为这个ajax太快了。
4. 某电话面试中问我addEventListener的第三个参数的boolean值的情况。我说大部分情况下传false，没有回答好。研究了一下。
outerDiv和innerDive都绑定事件
如果有true 有false，先执行true。
都为false，那就是冒泡上去，先innerDiv
都设置true，变成了捕获性质，先outerDiv。
[具体原理](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
5. new 构造函数在
`var A = function(){}`
`var a1 = new A`和
`var a2 = new A()`在没有传参时，意义相同。
6. js中的this。es6中箭头函数的this， 指向定义该函数时，作用域中this的值。固定死的。new 和call都变不了。
* `var obj = {id:1,this:this,do:function(){console.log(this.id)}}`
`obj.this;//window`
`obj.do();//1`
函数中的this 是调用函数的那个对象。调用do的作用域是obj，所以this.id 指向obj。
调用obj.this时，不牵扯到this的指向，所以obj.this是window
* `var obj = {id:2, this:this, do: ()=>{console.log(this, this.id)}}`
`obj.do();//window,undefined`
{}中是和this扯不上关系的。
因为此时do属于obj的属性，箭头函数的this等于定义时，函数所在作用域的this值。obj.this 是window，所以do继承的是obj的this
* `var obj = {id:3, this:this, do:function(){var push = ()=>{console.log(this, this.id)};push()}}`



