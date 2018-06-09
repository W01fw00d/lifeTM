class Universe {
    constructor(grid, beingFactory, painter)
    {
        this.grid = grid;
        this.beingFactory = beingFactory;
        this.painter = painter;
        this.painter.paintAllCanvasBlack();
        this.painter.smoothCanvasPixels();
    }

    createLife()
    {
        this.createBeings();
    }

    createBeing(x, y)
    {
        const BEING = this.beingFactory.create();
        this.grid.add(x, y, BEING);
        this.painter.paintWhiteCell(x, y);

        return BEING;
    }

    //DEPRECATED
    createBeings()
    {
        let n_Beings = this.calculateNBeings();

        while (n_Beings--) {
            this.painter.paintRandomPositionWhiteCell();
        }
    }

    getCell(x, y)
    {
        return this.grid.get(x, y);
    }

    calculateNBeings()
    {
        const MAX_BEINGS = 800;
        const RANDOM_N_BEINGS = Math.floor(Math.random() * MAX_BEINGS);

        return RANDOM_N_BEINGS < (MAX_BEINGS / 2) ?
            MAX_BEINGS / 2 :
            RANDOM_N_BEINGS;
    }

    forwardTicks(ticks)
    {
        while (ticks-- > 0) {
            this.forwardTick();
        }
    }

    forwardTick()
    {
        this.checkUnderpopulatedRule();
    }

    //Any live cell with fewer than two live neighbours (underpopulation) dies
    checkUnderpopulatedRule()
    {
        let x = this.grid.getWidth();

        while (x-- > 0) {
            let y = this.grid.getHeight();

            while (y-- > 0) {
                if (this.grid.get(x, y) !== undefined &&
                    this.grid.getNNeighbours(x, y) < 2
                ) {
                    this.kill(x, y);
                }
            }
        }
    }

    kill(x, y)
    {
        this.grid.remove(x, y);
    }
}
