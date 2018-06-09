class Universe {
    constructor(grid, beingFactory)
    {
        this.grid = grid;
        this.beingFactory = beingFactory;
    }

    createLife()
    {
        this.createBeings();

        setTimeout(() => { this.executeTick(); }, 1);
    }

    createRandomPositionBeing()
    {
        const BEING = this.beingFactory.create();
        this.grid.addAtEmptyRandomPosition(BEING);
    }

    createBeing(x, y)
    {
        const BEING = this.beingFactory.create();
        this.grid.add(x, y, BEING);
    }

    createBeings()
    {
        let n_Beings = this.calculateNBeings();

        while (n_Beings--) {
            this.createRandomPositionBeing();
        }
    }

    getCell(x, y)
    {
        return this.grid.get(x, y);
    }

    calculateNBeings()
    {
        const MAX_BEINGS = 50000;
        const RANDOM_N_BEINGS = Math.floor(Math.random() * MAX_BEINGS);

        return RANDOM_N_BEINGS < (MAX_BEINGS / 2) ?
            MAX_BEINGS / 2 :
            RANDOM_N_BEINGS;
    }

    forwardTicks(ticks)
    {
        while (ticks-- > 0) {
            this.checkPopulationRules();
        }
    }

    executeTick()
    {
        this.checkPopulationRules();
        setTimeout(() => { this.executeTick(); }, 500);
    }

    checkPopulationRules()
    {
        let x = this.grid.getWidth();

        while (x-- > 0) {
            let y = this.grid.getHeight();

            while (y-- > 0) {
                let n_neighbours = this.grid.getNNeighbours(y, x);

                if (this.grid.get(y, x) !== undefined) {
                    if (
                        this.isUnderpopulated(n_neighbours) ||
                        this.isOverpopulated(n_neighbours)
                    ) {
                        console.log(y, x, 'KILLED');
                        this.kill(y, x);
                    }

                } else if (this.isGrowingPopulation(n_neighbours)) {
                    console.log(y, x, 'CREATED');
                    this.createBeing(y, x);
                }
            }
        }
    }

    isUnderpopulated(n_neighbours)
    {
        return n_neighbours < 2;
    }

    isOverpopulated(n_neighbours)
    {
        return n_neighbours > 3;
    }

    isGrowingPopulation(n_neighbours)
    {
        return n_neighbours === 3;
    }

    kill(x, y)
    {
        this.grid.remove(x, y);
    }
}
