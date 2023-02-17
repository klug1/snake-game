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
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood(){
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {

    //se o click for contrario não funciona pois está  sendo projetado para a cobra não ter "Duas Cabeças"
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

    
}

function iniciarJogo() {

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over, Por favor recarregue a página');
        }
    }

    criarBG();
    createSnake();
    drawFood();

    
    let snakePosX = snake[0].x;
    let snakePosY = snake[0].y;

    if(direction == 'right') snakePosX += box;
    if(direction == 'left') snakePosX -= box;
    if(direction == 'up') snakePosY -= box;
    if(direction == 'down') snakePosY += box;

    if(snakePosX != food.x || snakePosY != food.y){
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakePosX,
        y: snakePosY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);