const img = document.getElementById('imagem');

const abajur = (e) => {
    turnOn[e.target.id]();
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = `A sua sorte está lançada você escolheu a COR da "sorte"...`
}


const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
}

buttons.addEventListener('click', abajur);


