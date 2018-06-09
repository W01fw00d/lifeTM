class Painter {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    paintAllCanvasBlack()
    {
        const BLACK = '#000000';

        this.context.fillStyle = BLACK;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    smoothCanvasPixels()
    {
        this.context.translate(1, 1);
        this.context.lineWidth = .5;
    }

    drawRandomPositionStar(color)
    {
        const x = Math.floor(Math.random() * this.canvas.width);
        const y = Math.floor(Math.random() * this.canvas.height);

        this.drawStar(x, y, 1, color);
    }

    drawStar(x, y, size, color)
    {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, size, size);
    }

    //UNUSED
    makeRandomColor()
    {
        const letters = '0123456789ABCDEF'.split('');
        let color = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    //UNUSED
    drawBigStar(x, y, size)
    {
        this.context.fillStyle = '#FFFFFF';
        this.context.fillRect(x, y, size, size);
        this.context.fillStyle = this.makeRandomColor();
        this.context.fillRect(x + 1, y, size, size);
        this.context.fillRect(x, y + 1, size, size);
        this.context.fillRect(x - 1, y, size, size);
        this.context.fillRect(x, y - 1, size, size);
    }
}