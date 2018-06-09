$(document).ready(init);

function init() 
{
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const PAINTER = new Painter(document.getElementById("stars"), WIDTH, HEIGHT);
    const GRID = new Grid(WIDTH, HEIGHT, PAINTER);
    const BEING_FACTORY = new BeingFactory();

    const UNIVERSE = new Universe(
        GRID,
        BEING_FACTORY
    );

    UNIVERSE.createLife();
}

