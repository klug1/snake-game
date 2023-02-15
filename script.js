let canvas = document.getElementById("snake");

//renderiza o desenho do canvas
let context = canvas.getContext("2d");

let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";

    //desenha o retangulo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();