
let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla');

//Funcion que reproduce el sonido.
function playSound(idDelSonido){
    document.querySelector(idDelSonido).play();
}

for(let i=0; i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        playSound(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('activa');
        }
    };
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    };
    
}



