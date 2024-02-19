// define html element
const board = document.getElementById('game-board');
const instuctionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');

//definr game variables
const gridSize = 20;
let snake = [{x: 10, y: 10}];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

//draw game map, snake food
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

//draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');  
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

//create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Set the position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//testing draw function
// draw();

//draw food function
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

//generate food
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x, y};
}

//moving the snake
function move() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head);

    // snake.pop();

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        clearInterval();
        gameInterval = setInterval(() => {
            move();
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}
   
//Test moving
// setInterval(() => {
//     move(); //move first
//     draw(); //then draw again new position
// },200)

//start game function
function startGame() {
    gameStarted = true; //keep tract of a running game
    instuctionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        // checkCollision();
        draw();
    }, gameSpeedDelay);
}

//kepres