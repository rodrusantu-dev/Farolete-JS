const img = document.getElementById('imagem');
const buttons = document.getElementById('buttons');
let indiceCor = 0;
let intervalId = null;

const farolete = (e) => {
    paradaAutomatica();
    turnOn[e.target.id]();
}

const proximaCor = () => indiceCor = indiceCor < 2 ? ++indiceCor : 0;

const escolheCor = () => {
    const colors = ['red','yellow','green']
    const color = colors[indiceCor];
    turnOn[color]();
    proximaCor();
}

const paradaAutomatica = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(escolheCor, 500 )
}

buttons.addEventListener('click', farolete);

