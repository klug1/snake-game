let canvas = document.getElementById("snake");

//renderiza o desenho do canvas
let context = canvas.getContext("2d");

let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";

    //desenha o retangulo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    createSnake();

    
    let snakePosX = snake[0].x;
    let snakePosY = snake[0].y;

    if(direction == 'right') snakePosX += box;
    if(direction == 'left') snakePosX -= box;
    if(direction == 'up') snakePosY -= box;
    if(direction == 'down') snakePosY += box;

    snake.pop();

    let newHead = {
        x: snakePosX,
        y: snakePosY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);