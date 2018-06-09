mock = function( constr, name ) {
    var keys = [];
    for( var key in constr.prototype ) {
        keys.push( key );
    }
    return keys.length > 0 ? createSpyObj( name || "mock", keys ) : {};
};

describe("Universe", ()=> {
    beforeEach(()=> {
        const WIDTH = 3;
        const HEIGHT = 3;

        const GRID = new Grid(WIDTH, HEIGHT);
        const BEING_FACTORY = new BeingFactory();
        const PAINTER = new PainterMock();

        UNIVERSE = new Universe(
            GRID,
            BEING_FACTORY,
            PAINTER
        );
    });

    describe("Any live cell with fewer than two live neighbours (underpopulation)...", ()=> {
        beforeEach(()=> {
            UNIVERSE.createBeing(1, 1);
        });

        it("...dies", ()=> {
            expect(UNIVERSE.getCell(1, 1)).not.toBeUndefined();
            UNIVERSE.forwardTicks(1);
            expect(UNIVERSE.getCell(1, 1)).toBeUndefined();
        });
    });

    describe("Any live cell with more than three live neighbours (overcrowding)...", ()=> {
        beforeEach(()=> {
            UNIVERSE.createBeing(1, 1);

            UNIVERSE.createBeing(0, 1);
            UNIVERSE.createBeing(0, 0);
            UNIVERSE.createBeing(1, 0);
            UNIVERSE.createBeing(2, 0);
        });

        it("...dies", ()=> {
            expect(UNIVERSE.getCell(1, 1)).not.toBeUndefined();
            UNIVERSE.forwardTicks(1);
            expect(UNIVERSE.getCell(1, 1)).toBeUndefined();
        });
    });

    describe("Any live cell with two or three live neighbours...", ()=> {
        beforeEach(()=> {
            UNIVERSE.createBeing(1, 1);

            UNIVERSE.createBeing(1, 0);
            UNIVERSE.createBeing(0, 0);
            UNIVERSE.createBeing(0, 1);
        });

        it("...remains alive", ()=> {
            expect(UNIVERSE.getCell(1, 1)).not.toBeUndefined();
            UNIVERSE.forwardTicks(1);
            expect(UNIVERSE.getCell(1, 1)).not.toBeUndefined();
        });
    });

    describe("Any dead cell with exactly three live neighbours...", ()=> {
        beforeEach(()=> {
            UNIVERSE.createBeing(1, 0);
            UNIVERSE.createBeing(0, 0);
            UNIVERSE.createBeing(0, 1);
        });

        it("...becomes alive", ()=> {
            expect(UNIVERSE.getCell(1, 1)).toBeUndefined();
            UNIVERSE.forwardTicks(1);
            expect(UNIVERSE.getCell(1, 1)).not.toBeUndefined();
        });
    });
});
