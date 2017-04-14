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
    }
}
//为了不修改原型，只好如此。以后可能有更优解
var Render = function(drawFoo){
    var canvas = new createCanvas()
    canvas.draw = drawFoo
    canvas.draw()
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

    ctx.beginPath()
    roundedRect(ctx, 12,12,150,150,15)


}
Render(canvas4)
