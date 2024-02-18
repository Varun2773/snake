// define html element
const board = document.getElementById('game-board');

//definr game variables
let snake = [{x: 10,y: 10}];

//draw game map, snake food
function draw() {
    board.innerHTML = '';
    drawSnake();
}

//draw snake
function  drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div','snake');

        // last a complete at 33.38 min

    })
}