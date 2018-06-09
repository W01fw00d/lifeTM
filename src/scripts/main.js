$(document).ready(init);

function init() 
{
    createUniverse();
}

function createUniverse()
{
    let canvas = document.getElementById("stars");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const CONTEXT = canvas.getContext("2d");
    const PAINTER = new Painter(canvas, CONTEXT);

    PAINTER.paintAllCanvasBlack();
    PAINTER.smoothCanvasPixels();
    createStars(PAINTER);
}

function createStars(PAINTER)
{
    const WHITE = '#FFFFFF';
    let n_stars = calculateNStars();

    while (n_stars--) {
        PAINTER.drawRandomPositionStar(WHITE);
    }
}

function calculateNStars()
{
    const MAX_STARS = 800;
    const RANDOM_N_STARS = Math.floor(Math.random() * MAX_STARS);

    return RANDOM_N_STARS < (MAX_STARS / 2) ?
        MAX_STARS / 2 :
        RANDOM_N_STARS;
}

