function generarAleatorio(min, max){
        let random = Math.random();
        //minimo = 5 maximo 600
        let numero = random*(max-min);
        let numeroEntero = parseInt(numero);

        numeroEntero = numeroEntero + 5
        return numeroEntero;
}

function mostrarEnSpan(idSpan, valor){
    let componente= document.getElementById(idSpan)
        componente.textContent=valor;
}