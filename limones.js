let canvas=document.getElementById("areaJuego")
let ctx = canvas.getContext("2d")

const ALTURA_SUELO= 10;
const ALTURA_PERSONAJE =60;
const ANCHO_PERSONAJE = 100;
const ANCHO_LIMON= 20;
const ALTURA_LIMON=20;
let personajeX = canvas.width/2;
let limonX = canvas.width/2;
let limonY = 5;

function dibujarSuelo(){
    ctx.fillStyle= ("red")
    ctx.fillRect(0, canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
}

function dibujarPersonaje(){
    ctx.fillStyle= ("yellow")
    ctx.fillRect(personajeX, canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE)
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    bajarLimon();
}

function moverIzquierda(){
    personajeX = personajeX - 10;
    refrescarPantalla();
}

function moverDerecha(){
    personajeX = personajeX + 10;
    refrescarPantalla();
}

function refrescarPantalla(){
    limpiarPersonaje();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon();
    
}
function limpiarPersonaje(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

function dibujarLimon(){
    ctx.fillStyle= ("green")
    ctx.fillRect(limonX,limonY, ANCHO_LIMON, ALTURA_LIMON);
    
}

function bajarLimon (){
    limonY = limonY + 10
    dibujarLimon();
    refrescarPantalla();
}
