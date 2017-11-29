import WebGL from './webgl'

class Canvas {
    constructor(opt) {
        this.canvas = opt.canvas;
    }
    init() {
        this.ctx = this.canvas.getContext('2d');
        this.createCircle(100, 100, 50, 'blue');
        this.triAngle();
        this.squarePath()
        this.createSpiral()
    }

    drawSquare() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(50, 50, 50, 50);
    }

    createMultipleRect() {
        for (let i = 0; i < 10; i++) {
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(50 * i, 50 * i, 50, 50);
        }
    }
    createCircle(x, y, size, color) {
        this.ctx.fillStyle = color || 'gray';
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2, false);
        this.ctx.fill();
    }
    triAngle() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(200, 200);
        this.ctx.lineTo(200, 100);
        this.ctx.closePath();
        this.ctx.stroke();
        
    }
    squarePath() {
        let path = new Path2D('M10 10 h 80 v 40 h -80 Z');
        path.fillStyle = 'black'
        return this.ctx.fill(path)

    }
    createSpiral() {
        let randColors = ['black', 'gray', '#111', 'blue']
        this.ctx.globalAlpha = 0.1;
        
        for (let i = 0; i < 10; i++) {
            const color = randColors[(Math.floor(Math.random() * randColors.length))]
            this.ctx.fillStyle = color;
            this.ctx.beginPath()
            this.ctx.arc(300, 300, 10 + 30 * i, Math.PI * 2, false);
            this.ctx.fill()
  
        }
    }
}

new WebGL()
