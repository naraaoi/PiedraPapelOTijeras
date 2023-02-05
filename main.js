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
    let punto = "";

    
//en el caso de elegir piedra

if (humano === "piedra" && pc === "piedra"){
    resultado = "empate";
} else if (humano === "piedra" && pc === "papel"){
    resultado = "perdiste";
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
    resultado = "perdiste";
} else if (humano === "tijera" && pc === "papel"){
    resultado = "ganaste!";
} else if (humano === "tijera" && pc === "tijera"){
    resultado = "empate";
}


//Resultado del enfrentamiento contra la pc
    
return console.log("---------------" + "\nElegiste: " + humano, "\nTu rival eligio: " + pc, "\nResultado: " + resultado + "\n---------------");


}

function puntaje(humano, pc){

    //Mismo If, pero para puntaje, deberia ver si hay forma de hacer todo en un solo if

//en el caso de elegir piedra
let puntaje = 0;

if (humano === "piedra" && pc === "piedra"){
    puntaje = puntaje + 1;
} else if (humano === "piedra" && pc === "papel"){
    puntaje = puntaje - 1;
} else if (humano === "piedra" && pc === "tijera"){
    puntaje = puntaje + 2;
}

//en el caso de elegir papel

if (humano === "papel" && pc === "piedra"){
    puntaje = puntaje + 2;
} else if (humano === "papel" && pc === "papel"){
    puntaje = puntaje + 1;
} else if (humano === "papel" && pc === "tijera"){
    puntaje = puntaje - 1;
}

//en el caso de elegir tijera

if (humano === "tijera" && pc === "piedra"){
    puntaje = puntaje -1;
} else if (humano === "tijera" && pc === "papel"){
    puntaje = puntaje + 2;
} else if (humano === "tijera" && pc === "tijera"){
    puntaje = puntaje +1;
}

return puntaje;
}

function game(humano, pc,){

    let puntajeh = 0;
    let puntajepc = 0;

    for (let i = 0; i < 4; i++) {

        ronda(humano, pc);

        if (puntaje(humano,pc) === 2){
            puntajeh = puntajeh + 2;
        }else if (puntaje(humano,pc) === 1){
            puntajeh = puntajeh + 1;
        }else if (puntaje(humano,pc) === -1){
            puntajeh = puntajeh; 
        }

        if (puntaje(humano,pc) === 2){
            puntajepc = puntajepc;
        }else if (puntaje(humano,pc) === 1){
            puntajepc = puntajepc + 1;
        }else if (puntaje(humano,pc) === -1){
            puntajepc = puntajepc +2; 
        }

        console.log(`Tu puntuación:${puntajeh}\n`);
        console.log(`Puntuación de pc:${puntajepc}`);
        humano = eleccionHumano();
        pc = eleccionCPU();
        
    }

    ronda(humano, pc);

    if (puntaje(humano,pc) === 2){
        puntajeh = puntajeh + 2;
    }else if (puntaje(humano,pc) === 1){
        puntajeh = puntajeh + 1;
    }else if (puntaje(humano,pc) === -1){
        puntajeh = puntajeh; 
    }

    if (puntaje(humano,pc) === 2){
        puntajepc = puntajepc;
    }else if (puntaje(humano,pc) === 1){
        puntajepc = puntajepc + 1;
    }else if (puntaje(humano,pc) === -1){
        puntajepc = puntajepc +2; 
    }
    console.log(`Tu puntuación:${puntajeh}`);
    console.log(`Puntuación de pc:${puntajepc}`);

if (puntajeh > puntajepc){
    console.log("GANASTE!")
} else if (puntajeh === puntajepc){
    console.log("Empate.")
}else if (puntajeh < puntajepc){
    console.log("Perdiste.")
}

}

let hum = eleccionHumano();
let pcc = eleccionCPU();

game(hum, pcc);