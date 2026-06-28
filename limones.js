let canvas=document.getElementById("areaJuego")
let ctx = canvas.getContext("2d")

const ALTURA_SUELO= 10;
const ALTURA_PERSONAJE =60;
const ANCHO_PERSONAJE = 100;

function dibujarSuelo(){
    ctx.fillStyle= ("red")
    ctx.fillRect(0, canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
}

function dibujarPersonaje(){
    ctx.fillStyle= ("yellow")
    ctx.fillRect(canvas.width/2-50, canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE)
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}