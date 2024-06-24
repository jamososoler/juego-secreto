let numeroSecreto = 1;
let intentos = 1;
let numerosSorteados=[];
let numeroMAximo=10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
  
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
     } else{
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','EL numero es MENOR');
            }else{
                asignarTextoElemento('p','EL numero es MAYOR');
            }
            intentos++;
            limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego(){
    
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //document.querySelector('#reiniciar').setAttribute('disabled',true)
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if(numerosSorteados.length == numeroMAximo){
        asignarTextoElemento('p','Ya se sortearon todos los elementos');
        document.getElementById('intentar').setAttribute('disabled',true);

    }else{
    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   
}
}

function condicionesIniciales(){

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMAximo}`);
numeroSecreto=generarNumeroSecreto();
intentos=1;

}

condicionesIniciales();