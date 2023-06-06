function tocaSom(id){
    const e = document.querySelector(id);

    if (e && e.localName === 'audio') {
        e.play();
    } else {
        alert('MEME NÃO ENCONTRADO!');
    };
};

const lista = document.querySelectorAll('.tecla');

for(let cont = 0; cont < lista.length; cont++) {
    const tecla = lista[cont];
    const som = tecla.classList[1];
    tecla.onclick = function() {
        tocaSom(`#som_${som}`);
    };

tecla.onkeydown = function(evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList.add('ativa');
        };
    };

tecla.onkeyup = function(evento) {
    if (evento.code === 'Enter' || evento.code === 'Space') {
    tecla.classList.remove('ativa');
        };
    };
}