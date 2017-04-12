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
    ctx.fillRect(20, 20, 100, 100)
    ctx.clearRect(40, 40, 60, 60)
    ctx.strokeRect(50, 50, 40, 40)

    ctx.beginPath();
    ctx.moveTo(200, 70)
    ctx.lineTo(250, 70)
    ctx.lineTo(250, 25)
    ctx.fill()

    ctx.beginPath();
    ctx.moveTo(300, 70)
    ctx.lineTo(350, 20)
    ctx.lineTo(350, 120)
    ctx.fill()

}
Render(canvas1)
let canvas2 = function(){
    var ctx = this.canvas.getContext("2d")
}
Render(canvas2)
