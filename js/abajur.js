
const img = document.getElementById('imagem');
const resposta = document.getElementById('resposta');


const abajur = (e) => {
    imagens[e.target.id]();
    resposta.innerHTML = `A sua sorte está lançada você escolheu a COR da "sorte"...`
}

const imagens = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
}

buttons.addEventListener('click', abajur);

