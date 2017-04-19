function getElementViewLeft(element){
    　　　　var actualLeft = element.offsetLeft;
    　　　　var current = element.offsetParent;
    　　　　while (current !== null){
        　　　　　　actualLeft += current.offsetLeft;
        　　　　　　current = current.offsetParent;
        　　　　}
    　　　　if (document.compatMode == "BackCompat"){
        　　　　　　var elementScrollLeft=document.body.scrollLeft;
        　　　　} else {
            　　　　　　var elementScrollLeft=document.documentElement.scrollLeft;
            　　　　}
    　　　　return actualLeft-elementScrollLeft;
    　　}
function getElementViewTop(element){
    　　　　var actualTop = element.offsetTop;
    　　　　var current = element.offsetParent;
    　　　　while (current !== null){
        　　　　　　actualTop += current. offsetTop;
        　　　　　　current = current.offsetParent;
        　　　　}
    　　　　 if (document.compatMode == "BackCompat"){
        　　　　　　var elementScrollTop=document.body.scrollTop;
        　　　　} else {
            　　　　　　var elementScrollTop=document.body.scrollTop;
            　　　　}
    　　　　return actualTop-elementScrollTop;
    　　}
var createCanvas = function(){
    this.canvas;
    this.init()
    canvasPrototype = this.canvas;
    this.container = document.querySelector(".post-body")
}
createCanvas.prototype = {
    init:function(){
        this.create()
        this.putCss()
    },
    create:function(){
        this.canvas = document.createElement("canvas")
    },
    putCss:function(){
        this.canvas.style.cssText = "border:1px solid red"
        this.canvas.width = 620;
        this.canvas.height= 200;
    },
    render:function() {
        this.container.appendChild(this.canvas)
    },
    addId:function(name){

        this.canvas.id = name;
    },

}
//为了不修改原型，只好如此。以后可能有更优解
var Render = function(drawFoo){
    var canvas = new createCanvas()
    canvas.draw = drawFoo
    canvas.draw()
    canvas.addId(drawFoo.name)
    canvas.render();
}
let canvas1 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    ctx.fillRect(20, 20, 160, 160)
    ctx.clearRect(40, 40, 120, 120)
    ctx.strokeRect(50, 50, 100, 100)

    ctx.beginPath();
    ctx.moveTo(200, 100)
    ctx.lineTo(250, 100)
    ctx.lineTo(250, 150)
    ctx.fill()

    ctx.beginPath();
    ctx.moveTo(300, 100)
    ctx.lineTo(350, 50)
    ctx.lineTo(350, 150)
    ctx.fill()

    ctx.beginPath();
    ctx.arc(500, 100, 50, 0, Math.PI * 2, true)
    ctx.moveTo(480, 85)
    ctx.arc(475, 85, 5, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.moveTo(530, 85)
    ctx.arc(525, 85, 5, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.moveTo(540, 100)
    ctx.arc(500, 100, 40, 0, Math.PI * 1, false)
    ctx.stroke()

}
Render(canvas1)
let canvas2 = function(){
    var ctx = this.canvas.getContext("2d")
    //为了加深印象，先不用整合函数。
    //分割线
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    //大脸
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true)
    ctx.stroke()

    //左眉毛
    ctx.beginPath()
    ctx.arc(80, 80, 10, -Math.PI * 0.25, -Math.PI * 0.75, true)
    ctx.stroke()

    //右眉毛
    ctx.beginPath()
    ctx.arc(120, 80, 10, -Math.PI * 0.25, -Math.PI * 0.75, true)
    ctx.stroke()

    //左眼
    //上
    ctx.beginPath()
    ctx.arc(75, 100, 20, -Math.PI * 0.25, -Math.PI * 0.75, true)
    ctx.stroke()
    //下
    ctx.beginPath()
    ctx.arc(75, 100, 10, -Math.PI * .25, -Math.PI * .75, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(85.635, 89.365, 5, -Math.PI * .250, Math.PI * .75, false)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(64.365, 89.365, 5, 0, Math.PI * 2, false)
    ctx.fill()

    //右眼
    //上
    ctx.beginPath()
    ctx.arc(125, 100, 20, -Math.PI * 0.25, -Math.PI * 0.75, true)
    ctx.stroke()
    //下
    ctx.beginPath()
    ctx.arc(125, 100, 10, -Math.PI * .25, -Math.PI * .75, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(135.635, 89.365, 5, -Math.PI * .250, Math.PI * .75, false)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(114.365, 89.365, 5, 0, Math.PI * 2, false)
    ctx.fill()




    //嘴
    ctx.beginPath()
    ctx.arc(100, 100, 30, Math.PI * .2, Math.PI * .8, false)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(400,100)
    ctx.quadraticCurveTo(480, 50, 500, 100)
    ctx.quadraticCurveTo(480, 150, 400, 200)
    ctx.quadraticCurveTo(320, 150, 300, 100)
    ctx.quadraticCurveTo(320, 50, 400, 100)
    ctx.fill()


}
Render(canvas2)

var canvas3 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    for(let i = 0, len = 4;i < len;i++){
        for(let j = 0, len = 3; j < len;j++){
            ctx.beginPath()
            let x = 25 + i * 50;
            let y = 25 + j * 50;
            let r = 20;
            let startAngle = 0;
            let endAngle = Math.PI + (Math.PI * j)/2

            let dir = i % 2 == 0 ? false : true;
            ctx.arc(x, y, r, startAngle, endAngle, dir)

            if(i > 1){
                ctx.fill()
            }else{
                ctx.stroke()
            }
        }
    }
    ctx.beginPath()
    ctx.moveTo(300,50)
    ctx.quadraticCurveTo(280, 100, 300, 150)
    ctx.lineTo(500, 150)
    ctx.quadraticCurveTo(520, 100, 500, 50)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(400, 100)
    ctx.quadraticCurveTo(375, 120, 350, 120)
    ctx.quadraticCurveTo(375, 100,403, 112)
    ctx.moveTo(400, 100)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(355, 118, 1, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(350, 120, 10, 0, -Math.PI * .2, true)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(353, 110, 2, 0, Math.PI * 2, true)

    ctx.stroke()
    ctx.beginPath()
    ctx.arc(360, 95, 3, 0, Math.PI * 2, true)
    ctx.stroke()

}
Render(canvas3)
var roundedRect = function(ctx, x, y, width, height, radius){
    ctx.beginPath()
    ctx.moveTo(x, y + radius)
    ctx.lineTo(x, y + height - radius)
    ctx.quadraticCurveTo(x ,y + height, x + radius, y + height)
    ctx.lineTo(x + width -radius, y + height)
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
    ctx.lineTo(x + width, y + radius)
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
    ctx.lineTo(x + radius, y)
    ctx.quadraticCurveTo(x, y, x , y + radius)


    ctx.stroke()
}
var canvas4 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    roundedRect(ctx, 12,12,150,150,15)
    roundedRect(ctx, 19, 19, 150, 150, 15)
    roundedRect(ctx, 53, 53, 49, 33, 10)
    roundedRect(ctx, 53, 119, 49, 16, 6)
    roundedRect(ctx, 135, 53, 49, 33, 10)
    roundedRect(ctx, 135, 119, 25, 49, 10)

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI/7, -Math.PI/7, false)
    ctx.lineTo(31, 37)
    ctx.fill()

    for(var i =0;i < 6; i++){
        ctx.fillRect(51+i*16, 35, 4, 4)
    }

    for(i = 0;i < 6;i++){
        ctx.fillRect(115, 51+i*16, 4, 4)
    }

    for(i = 0; i < 8;i++){
        ctx.fillRect(51+i*16, 99, 4, 4)
    }

    ctx.beginPath()
    ctx.moveTo(83, 116)
    ctx.lineTo(83, 102)
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
    ctx.lineTo(111, 116)
    ctx.lineTo(106.333, 111.333)
    ctx.lineTo(101.666,116);
    ctx.lineTo(97,111.333);
    ctx.lineTo(92.333,116);
    ctx.lineTo(87.666,111.333);
    ctx.lineTo(83,116);
    ctx.fill()

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91,96);
    ctx.bezierCurveTo(88,96,87,99,87,101);
    ctx.bezierCurveTo(87,103,88,106,91,106);
    ctx.bezierCurveTo(94,106,95,103,95,101);
    ctx.bezierCurveTo(95,99,94,96,91,96);
    ctx.moveTo(103,96);
    ctx.bezierCurveTo(100,96,99,99,99,101);
    ctx.bezierCurveTo(99,103,100,106,103,106);
    ctx.bezierCurveTo(106,106,107,103,107,101);
    ctx.bezierCurveTo(107,99,106,96,103,96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101,102,2,0,Math.PI*2,true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89,102,2,0,Math.PI*2,true);
    ctx.fill();


}
Render(canvas4)
let canvas5 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    var rectangle = new Path2D()
    rectangle.rect(10, 10, 50, 50)
    var circle = new Path2D()
    circle.moveTo(125, 35)
    circle.arc(100, 35, 25, 0, 2 * Math.PI)

    ctx.stroke(rectangle)
    ctx.fill(circle)

}
Render(canvas5)

let canvas6 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    for(let i = 0; i < 6; i++){
        for(let j = 0;j < 6; j++){
            ctx.fillStyle = 'rgb('+ Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 43.5 * j) +', 0)'
            ctx.fillRect(j * 25, i * 25, 25, 25)
        }
    }
    for(let i = 0; i < 6; i++){
        for(let j = 0;j < 6; j++){
            ctx.fillStyle = 'rgb(0,'+ Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 43.5 * j) +')'
            ctx.fillRect(j * 25 + 200, i * 25, 25, 25)
        }
    }
    for(let i = 0; i < 6; i++){
        for(let j = 0;j < 6; j++){
            ctx.fillStyle = 'rgb('+ Math.floor(255 - 42.5 * i) + ', 0 ,' + Math.floor(255 - 43.5 * j) +')'
            ctx.fillRect(j * 25 + 400, i * 25, 25, 25)
        }
    }


}
Render(canvas6)
let canvas7 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    for(let i = 0; i < 6; i++){
        for(let j = 0;j < 6; j++){
            ctx.beginPath()
            ctx.strokeStyle = 'rgb('+ Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 43.5 * j) +', 0)'
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
            ctx.stroke()
        }
    }
    for(let i = 0; i < 6; i++){
        for(let j = 0;j < 6; j++){
            ctx.fillStyle = 'rgba('+ Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 43.5 * j) +', 0, '+ j * 1 /6 +')'
            ctx.fillRect(j * 25 + 200, i * 25, 25, 25)
        }
    }


}
Render(canvas7)
let canvas8 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    ctx.fillStyle = '#fd0'
    ctx.fillRect(0, 0, 100, 100)
    ctx.fillStyle = '#6c0'
    ctx.fillRect(100, 0, 100, 100)
    ctx.fillStyle = '#09f'
    ctx.fillRect(0, 100, 100, 100)
    ctx.fillStyle = '#f30'
    ctx.fillRect(100, 100, 100, 100)
    ctx.fillStyle='#fff'
    ctx.globalAlpha = 0.2;
    for(let i =0;i < 10;i++){
        ctx.beginPath();
        ctx.arc(100, 100, 10 + 10 * i, 0, Math.PI * 2, true)
        ctx.fill()

    }

    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgb(255, 221, 0)'
    ctx.fillRect(300, 0, 200, 50)
    ctx.fillStyle = 'rgb(102, 204, 0)'
    ctx.fillRect(300, 50, 200, 50)
    ctx.fillStyle = 'rgb(0, 153, 255)'
    ctx.fillRect(300, 100, 200, 50)
    ctx.fillStyle = 'rgb(255, 51, 0)'
    ctx.fillRect(300, 150, 200, 50)

    for(let i =0;i < 10;i ++){
        ctx.fillStyle = 'rgba(255, 255, 255, '+ (i + 1)/10 +')'
        for(let j =0;j < 4;j ++){
            ctx.fillRect(305+i*19, 5+j*50, 19, 40)
        }

    }


}
Render(canvas8)
let canvas9 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    for(let i =0;i < 10;i ++){
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(5 + i * 20, 5)
        ctx.lineTo(5 + i * 20, 195)

        ctx.stroke()
    }


    ctx.beginPath()
    ctx.lineWidth=1;
    ctx.moveTo(200,0)
    ctx.lineTo(200,100)

    ctx.stroke()

    ctx.moveTo(210.5,0)
    ctx.lineTo(210.5,100)
    ctx.stroke()
    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(230,0)
    ctx.lineTo(230,100)
    ctx.stroke()
    ctx.moveTo(250.5, 0)
    ctx.lineTo(250.5,100)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillRect(260,0, 1,100)
    ctx.fillRect(265.5,0,1,100)


    //
}
Render(canvas9)

let canvas10 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.scale(2,2)
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    for(let i =0;i < 10;i ++){
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(5 + i * 20, 5)
        ctx.lineTo(5 + i * 20, 195)

        ctx.stroke()
    }


    ctx.beginPath()
    ctx.lineWidth=1;
    ctx.moveTo(200,0)
    ctx.lineTo(200,100)

    ctx.stroke()

    ctx.moveTo(210.5,0)
    ctx.lineTo(210.5,100)
    ctx.stroke()
    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(230,0)
    ctx.lineTo(230,100)
    ctx.stroke()
    ctx.moveTo(250.5, 0)
    ctx.lineTo(250.5,100)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillRect(260,0, 1,100)
    ctx.fillRect(265.5,0,1,100)



    //
}
Render(canvas10)
document.querySelector("#canvas10").style.cssText = "transform:scale(.5);transform-origin:left top"
//采用放大后缩小的方式，可以解决一像素的虚化问题。
let canvas11 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    let lineCap = ['butt', 'round', 'square']
    ctx.strokeStyle = 'blue'
    ctx.beginPath()
    ctx.moveTo(10, 50)
    ctx.lineTo(200, 50)
    ctx.moveTo(10, 150)
    ctx.lineTo(200, 150)
    ctx.stroke()

    ctx.strokeStyle = 'green'
    ctx.lineWidth = 15;
    for(let i = 0;i < lineCap.length;i++){
        ctx.lineCap = lineCap[i]
        ctx.beginPath()
        ctx.moveTo(50 + 30 * i, 50)
        ctx.lineTo(50 + 30 * i, 150)
        ctx.stroke()
    }
    const lineJoin = ['round', 'bevel', 'miter']
    for(let i = 0;i < lineJoin.length;i++){


        ctx.lineJoin = lineJoin[i]
        ctx.beginPath()
        ctx.moveTo(300, 10 + i *40)
        ctx.lineTo(350, 60 + i * 40)
        ctx.lineTo(375,10+i*40);
        ctx.lineTo(415,60+i*40);
        ctx.lineTo(450,10+i*40);
        ctx.stroke();
    }
}
Render(canvas11)
let canvas12 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

}
Render(canvas12)
let ctx12 = document.getElementById("canvas12").getContext("2d")
let offset = 0;
function draw(){
    ctx12.clearRect(0, 0, 620, 200)
    ctx12.setLineDash([14, 2])
    //设定实虚的对比
    ctx12.lineDathOffset = -offset;
    ctx12.strokeRect(10, 10, 100, 100)
}
function march(){
    offset++
    if(offset > 16){
        offset = 0

    }
    draw();
    setTimeout(march,20)
}
march()

let canvas13 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    var lineargradient = ctx.createLinearGradient(0, 0, 50, 50)
    //画布的位置是相对于canvas，而不是相对于fillRect。
    var radialgradient = ctx.createRadialGradient(175, 0, 0, 175, 0, 100)

    //设置渐变的路径和位置
    lineargradient.addColorStop(0, 'white')
    lineargradient.addColorStop(1, 'black')

    radialgradient.addColorStop(0, '#ffffff')
    radialgradient.addColorStop(.8, '#ff0188')
    radialgradient.addColorStop(1, '#000000')

    //设置颜色
    //
    ctx.fillStyle = lineargradient
    //添加入画笔
    //绘画
    ctx.fillRect(10, 10, 130, 130)

    ctx.fillStyle = radialgradient
    ctx.fillRect(150, 0, 100, 100)

    let img = new Image()
    img.src = 'headImg.jpg'
    img.onload = function(){
        let ptrn = ctx.createPattern(img, 'repeat')
        ctx.fillStyle = ptrn;
        ctx.fillRect(300, 0, 100, 100)
    }
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, .5)'
    ctx.font = '40px Times New Roman'
    ctx.fillStyle = 'Black'
    ctx.fillText("canvas ", 450, 100)

    ctx.fillText('canvas ', 450, 150)
    ctx.strokeStyle = 'green'
    ctx.strokeText("canvas ", 450, 150)

    ctx.beginPath()
    ctx.arc(450, 0, 30, 0, Math.PI * 2, true)
    ctx.arc(450, 0, 15, 0, Math.PI * 2, true)
    //ctx.fill("evenodd")
    ctx.fill()
}
Render(canvas13)

let canvas14 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.moveTo(0,60)
    ctx.lineTo(620,60)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    ctx.font = '40px yaHei'
    ctx.textAlign = 'start'
    //textAlign 定位为此，如果是center则定位点在文字左右正中。
    //
    ctx.textBaseline = 'hanging'///'top'
    ctx.direction = 'rtl'
    ctx.fillText('hello canvas text', 0, 100)
    let text = ctx.measureText("foo")
    console.log(text)

}
Render(canvas14)
let canvas15 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"

    let img = new Image()
    img.onload = function(){
        ctx.drawImage(img, 100, 0, 200, 200)
    }
    img.src = 'data:image/png;base64,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'
}
    Render(canvas15)
    let canvas16 = function(){
        var ctx = this.canvas.getContext("2d")
        ctx.beginPath();
        ctx.moveTo(0,100)
        ctx.lineTo(620, 100)
        ctx.strokeStyle = "pink"
        ctx.stroke()

        ctx.strokeStyle="#000"
        ctx.fillRect(0, 0, 150, 150)
        ctx.save()

        ctx.fillStyle = '#09f'
        ctx.fillRect(15, 15, 120, 120)

        ctx.save()
        ctx.fillStyle = '#fff'
        ctx.globalAlpha = .5
        ctx.fillRect(30, 30, 90, 90)

        ctx.restore()
        ctx.fillRect(45, 45, 60, 60)

        ctx.restore()
        ctx.fillRect(60, 60, 30, 30)

    }
Render(canvas16)

let canvas17 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    let sun = new Image()
    let moon = new Image()
    let earth = new Image()
    function init(){

        sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
        window.requestAnimationFrame(draw)
    }
    function draw(){
        ctx.globalCompositeOperation = 'source-over'
        ctx.clearRect(0, 0, 200, 200)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'


        ctx.beginPath()
        ctx.drawImage(sun, 0, 0, 200, 200)
        ctx.arc(100, 100, 60, 0, Math.PI * 2, false)
        ctx.stroke()

        let time = new Date()


        //定位
        //
        ctx.save()
        ctx.translate(100, 100)
        //earth
        ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
        ctx.translate(60,  0)
        ctx.drawImage(earth, -12, -12)
        ctx.fillRect(0, -12, 40, 24)
        //moon
        ctx.save()
        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
        ctx.translate(0,28.5);

        ctx.drawImage(moon, -3.5, -3.5)
        ctx.restore()
        ctx.restore()
        ctx.fillText("这是个错误的示范，月亮不能被地球的阴影遮盖。", 210, 100)
        ctx.fillText("必须从destinstion-over写，不然moon无法定位。", 210, 130)
        window.requestAnimationFrame(draw)

    }
    init()




}
Render(canvas17)

let canvas18 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000"
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();
    function init(){
        sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
        window.requestAnimationFrame(draw);
    }

    function draw() {

        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0,0,300,300); // clear canvas

        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)';
        ctx.save();
        ctx.translate(100,100);

        // Earth
        var time = new Date();
        ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
        ctx.translate(60,0);
        ctx.fillRect(0,-12,50,24); // Shadow
        ctx.drawImage(earth,-12,-12);

        // Moon
        ctx.save();
        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
        ctx.translate(0,28.5);
        ctx.drawImage(moon,-3.5,-3.5);
        ctx.restore();

        ctx.restore();

        ctx.beginPath();
        ctx.arc(100,100,60,0,Math.PI*2,false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(sun,0,0,200,200);

        window.requestAnimationFrame(draw);
    }

    init();
}
Render(canvas18)

var canvas19 = function(){
    var ctx = this.canvas.getContext("2d")
    function clock(){
        var now = new Date();
        ctx.save();
        ctx.clearRect(0,0,150,150);
        ctx.translate(75,75);
        ctx.scale(0.4,0.4);
        ctx.rotate(-Math.PI/2);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        // Hour marks
        ctx.save();
        for (var i=0;i<12;i++){
            ctx.beginPath();
            ctx.rotate(Math.PI/6);
            ctx.moveTo(100,0);
            ctx.lineTo(120,0);
            ctx.stroke();
        }
        ctx.restore();

        // Minute marks
        ctx.save();
        ctx.lineWidth = 5;
        for (i=0;i<60;i++){
            if (i%5!=0) {
                ctx.beginPath();
                ctx.moveTo(117,0);
                ctx.lineTo(120,0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI/30);
        }
        ctx.restore();

        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr  = now.getHours();
        hr = hr>=12 ? hr-12 : hr;

        ctx.fillStyle = "black";

        // write Hours
        ctx.save();
        ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20,0);
        ctx.lineTo(80,0);
        ctx.stroke();
        ctx.restore();

        // write Minutes
        ctx.save();
        ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28,0);
        ctx.lineTo(112,0);
        ctx.stroke();
        ctx.restore();

        // Write seconds
        ctx.save();
        ctx.rotate(sec * Math.PI/30);
        ctx.strokeStyle = "#D40000";
        ctx.fillStyle = "#D40000";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30,0);
        ctx.lineTo(83,0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0,0,10,0,Math.PI*2,true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(95,0,10,0,Math.PI*2,true);
        ctx.stroke();
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.arc(0,0,3,0,Math.PI*2,true);
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = 'pink';
        ctx.arc(0,0,142,0,Math.PI*2,true);
        ctx.stroke();

        ctx.restore();

        window.requestAnimationFrame(clock);
    }

    window.requestAnimationFrame(clock);
    ctx.textAlign = ''
    ctx.fillText("clock", 200,10)
    function clock1(){
        ctx.save()

        ctx.clearRect(200,0,200,200)
        ctx.strokeStyle = 'purple'

        ctx.lineWidth = 7
        ctx.lineCap = 'round'

        ctx.translate(300, 100)

        ctx.scale(.9,.9)

        ctx.beginPath()
        ctx.arc(00, 00, 80, 0, Math.PI * 2, true)

        ctx.stroke()
        ctx.strokeStyle = '#000'
        ctx.rotate(-Math.PI/2)
        ctx.save()
        for(let i = 0;i < 12;i++){
            ctx.beginPath()
            ctx.rotate(Math.PI/6)
            ctx.moveTo(60, 0)
            ctx.lineTo(70, 0)
            ctx.stroke()
        }
        ctx.restore()
        ctx.save()
        ctx.lineWidth = 2
        for(let i = 0;i < 60;i++){
            ctx.beginPath()
            ctx.rotate(Math.PI/30)
            ctx.moveTo(66,0)
            ctx.lineTo(69,0)
            ctx.stroke()
        }
        ctx.restore()
        let now  = new Date()
        let sec = now.getSeconds()
        let min = now.getMinutes()
        let hour = now.getHours()
        hour = hour >=12 ? hour-12:hour
        ctx.fillStyle = 'black'
        ctx.lineWidth = 2;
        ctx.save()
        ctx.lineWidth = 5;
        ctx.rotate(hour*(Math.PI/6) + (Math.PI/360)* min + (Math.PI/21600)*sec)
        ctx.beginPath()
        ctx.moveTo(-20,0)
        ctx.lineTo(40,0)
        ctx.stroke()
        ctx.restore()
        //minute
        ctx.save()
        ctx.rotate((Math.PI/30)*min + (Math.PI/1800)* sec)
        ctx.beginPath()
        ctx.moveTo(-10,0)
        ctx.lineTo(60,0)
        ctx.stroke()
        ctx.restore()
        //seconds
        ctx.save()
        ctx.rotate((Math.PI/30)* sec)
        ctx.beginPath()
        ctx.strokeStyle = 'red'
        ctx.fillStyle = 'red'
        ctx.moveTo(-30,0)
        ctx.lineTo(70,0)
        ctx.stroke()
        ctx.arc(0,0,5,0, Math.PI *2)
        ctx.fill()
        ctx.restore()
        ctx.restore()
        window.requestAnimationFrame(clock1)

    }
    window.requestAnimationFrame(clock1)

}
Render(canvas19)
var canvas20 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000";

    let img = new Image()
    img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg'
    let canvasXSize = 620;
    let canvasYSize = 200;
    let speed = 30;
    let scale = 1.05
    let y = -4.5
    let dx = .75;
    let imgW
    let x = 0;
    let clearX;
    let clearY;
    img.onload = function(){
        imgW = img.width*scale
        imgH = img.height*scale
        if(imgW > canvasXSize){
            x = canvasXSize-imgW
            clearX = imgW

        }else{
            clearX = canvasXSize
        }
        return setInterval(draw, speed)


    }
    function draw(){
        ctx.clearRect(0,0,clearX,clearY)
        if(imgW <= canvasXSize){

            if(x > (canvasXSize)){
                x=0
            }
            if(x > (canvasXSize-imgW)){
                ctx.drawImage(img, x-canvasXSize, x-canvasXSize +1,y,imgW,imgH)

            }
        }else{
            if(x> canvasXSize){
                x = canvasXSize - imgW
            }
            if(x > (canvasXSize - imgW)){

                ctx.drawImage(img, x - imgW +1, y, imgW, imgH)
            }
        }
        ctx.drawImage(img, x, y, imgW, imgH)
        x += dx
    }

}
Render(canvas20)

var canvas21 = function(){
    console.log(this.canvas)
    var thatCanvas = this.canvas
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()


    ctx.strokeStyle="#000";
    let raf;
    let dom = document.querySelector("#canvas21")
    let running = false;
    let ball = {
        x:100,
        y:100,
        vx:5,
        vy:1,
        radius:25,
        color:'blue',
        draw:function(){
            ctx.beginPath()
            console.log(this)
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.fillStyle = this.color
            ctx.fill()
        }
    }
    console.log(this.canvas)

    let Canvas = this.canvas
    let clear21 = function(){
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(0,0, Canvas.width,Canvas.height)

    }
    function draw21(){
        clear21()
        ball.draw()
        ctx.fillText("小球碰撞", 100,100)
        ball.x +=ball.vx;
        ball.y +=ball.vy;

        if(ball.y + ball.vy + ball.radius > Canvas.height || ball.y + ball.vy - ball.radius < 0){
            ball.vy = -ball.vy

        }
        if(ball.x + ball.vx + ball.radius > Canvas.width|| ball.x + ball.vx - ball.radius < 0){
            ball.vx = -ball.vx

        }
        //ball.vy *=.99
        //ball.vy +=.25
        raf = window.requestAnimationFrame(draw21)

    }
    this.canvas.addEventListener('mousemove', function(e){
        if(!running){
            clear21()
            console.log(this.clientLeft,this.clientTop,ball.x, e.clientX)
            console.log(dom)
             ball.x = e.clientX - getElementViewLeft(Canvas);
            ball.y = e.clientY - getElementViewTop(Canvas);
            ball.draw()

        }
    })
    this.canvas.addEventListener("click", function(e){
        if(!running){

            raf = window.requestAnimationFrame(draw21)
            running = true
        }
    })
    this.canvas.addEventListener("mouseout", function(){
        window.cancelAnimationFrame(raf)
        running = false;
    })
    ball.draw()
}
Render(canvas21)

var canvas22 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000";
    ctx.fillText("颜色选择器", 500,50)

    let img = new Image()
    img.src = 'headImg.jpg'
    //不能用mdn上的图片，禁止跨域。下面的方法不能解决。
    img.crossOrigin = 'Anonymous'
    img.setAttribute('crossOrigin', '');
    let Canvas = this.canvas
    img.onload = function(){
        //ctx.drawImage(img, 0, 0)
    var radialGradient = ctx.createRadialGradient (Canvas.width/2, Canvas.height/2, 10, Canvas.width/2, Canvas.height/2, 200);

    radialGradient.addColorStop(0, 'rgba(247, 247, 247, .1)');
    radialGradient.addColorStop(0.7, 'rgba(120, 120, 120, .5)');
    radialGradient.addColorStop(0.9, 'rgba(0, 0, 0, .8)');
    radialGradient.addColorStop(1, 'rgba(238, 238, 238, 1)');
    ctx.beginPath();
    ctx.arc(Canvas.width/2, Canvas.height/2, 300, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = radialGradient;
    ctx.fill();


    let myImageData = ctx.getImageData(0, 0,100,100)

    console.log(myImageData)
    let anotherImg = ctx.createImageData(myImageData)
    console.log(anotherImg)
    //确定是只传了大小，并没有颜色样式
        let pick = function(e){
            console.log(e)
            let x = e.layerX;
            let y = e.layerY;
            console.log(ctx.getImageData(0,0,100,100))
            let pixel = ctx.getImageData(x,y,1,1)
            let data = pixel.data
            console.log(data[3]/255)
            let rgba = 'rgba('+ data[0] + ',' + data[1] + ',' + data[2] +','+ data[3]/255+')'
            document.querySelector('.colorPicker').style.background =rgba
            document.querySelector('.colorPicker').value= rgba

        }

        Canvas.addEventListener("mousemove", pick)

    }

}
Render(canvas22)

let colorBlock = document.createElement("input")
colorBlock.className = "colorPicker"
colorBlock.style.cssText = "border:1px solid black;width:150px;height:50px;margin:10px;font-size:13px;"
    document.querySelector(".post-body").appendChild(colorBlock)
var canvas100 = function(){
    var ctx = this.canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0,100)
    ctx.lineTo(620, 100)
    ctx.strokeStyle = "pink"
    ctx.stroke()

    ctx.strokeStyle="#000";
}
Render(canvas100)
