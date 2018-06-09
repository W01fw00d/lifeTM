class Painter {
    constructor(canvas, width, height)
    {
        canvas.width = width;
        canvas.height = height;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.paintAllCanvasBlack();
        this.smoothCanvasPixels();
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

    paintWhiteCell(x, y)
    {
        const WHITE = '#FFFFFF';

        this.paintCell(x, y, 1, WHITE)
    }

    paintBlackCell(x, y)
    {
        const BLACK = '#000000';

        this.paintCell(x, y, 1, BLACK)
    }

    paintRandomPositionWhiteCell()
    {
        const WHITE = '#FFFFFF';

        this.paintRandomPositionCell(WHITE);
    }

    paintRandomPositionCell(color)
    {
        const x = Math.floor(Math.random() * this.canvas.width);
        const y = Math.floor(Math.random() * this.canvas.height);

        this.paintCell(x, y, 1, color);
    }

    paintCell(x, y, size, color)
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
