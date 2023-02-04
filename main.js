const Elemento = ['piedra', 'papel', 'tijera']

function eleccionCPU(){
    const ElementoAleatorio = Elemento[Math.floor(Math.random() * Elemento.length)];
    return ElementoAleatorio;

}

function eleccionHumano(){
    const IngElemento = prompt().toLowerCase();
    return IngElemento;

}

function ronda(humano, pc){

    let resultado = "";
    
//en el caso de elegir piedra

if (humano === "piedra" && pc === "piedra"){
    resultado = "empate";
} else if (humano === "piedra" && pc === "papel"){
    resultado = "Perdiste";
} else if (humano === "piedra" && pc === "tijera"){
    resultado = "ganaste!";
}

//en el caso de elegir papel

if (humano === "papel" && pc === "piedra"){
    resultado = "ganaste!";
} else if (humano === "papel" && pc === "papel"){
    resultado = "empate";
} else if (humano === "papel" && pc === "tijera"){
    resultado = "perdiste";
}

//en el caso de elegir tijera

if (humano === "tijera" && pc === "piedra"){
    resultado = "Perdiste";
} else if (humano === "tijera" && pc === "papel"){
    resultado = "ganaste!";
} else if (humano === "tijera" && pc === "tijera"){
    resultado = "empate";
}

//Resultado del enfrentamiento contra la pc

    return console.log("---------------" + "\nElegiste: " + humano, "\nTu rival eligio: " + pc, "\nResultado: " + resultado + "\n---------------");

}

let hum = eleccionHumano();
let pcc = eleccionCPU();

ronda(hum, pcc);