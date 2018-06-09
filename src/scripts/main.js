$(document).ready(init);

function init() 
{
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const GRID = new Grid(WIDTH, HEIGHT);
    const BEING_FACTORY = new BeingFactory();
    const PAINTER = new Painter(document.getElementById("stars"), WIDTH, HEIGHT);

    const UNIVERSE = new Universe(
        GRID,
        BEING_FACTORY,
        PAINTER
    );

    UNIVERSE.createLife();
}

