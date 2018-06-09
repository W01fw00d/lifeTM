class Grid {
    constructor(width, height, painter)
    {
        this.width = width;
        this.height = height;

        this.painter = painter;
        this.matrix = this.createEmptyMatrix(width, height);
    }

    getWidth()
    {
        return this.width;
    }

    getHeight()
    {
        return this.height;
    }

    createEmptyMatrix(x, y)
    {
        let matrix = [];
        for(let i = 0; i < y; i++) {
            matrix[i] = new Array(x);
        }

        return matrix;
    }

    add(x, y, item)
    {
        this.matrix[x][y] = item;

        this.painter.paintWhiteCell(x, y);
    }

    addAtEmptyRandomPosition(item)
    {
        let y = Math.floor(Math.random() * this.width);
        let x = Math.floor(Math.random() * this.height);

        this.add(x, y, item);
    }

    remove(x, y)
    {
        this.matrix[x][y] = undefined;
        this.painter.paintBlackCell(x, y);
    }

    get(x, y)
    {
        return this.matrix[x][y];
    }

    getNNeighbours(i, j)
    {
        let counter = 0;

        let row_limit = this.matrix.length - 1;
        if(row_limit > 0){
            let column_limit = this.matrix[0].length - 1;
            for(let x = Math.max(0, i-1); x <= Math.min(i+1, row_limit); x++){
                for(let y = Math.max(0, j-1); y <= Math.min(j+1, column_limit); y++){
                    if(
                        (x !== i || y !== j) &&
                        this.matrix[x][y] !== undefined
                    ){
                        counter++;
                    }
                }
            }
        }

        return counter;
    }
}
