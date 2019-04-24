import flipCoin from '../src/flipCoin.js';

const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const coinImage = document.getElementById('coin-image');
const resultMessage = document.getElementById('result-message');
const headsRadio = document.getElementById('heads-radio');
const flipButton = document.getElementById('flip-button');

let wins = 0;
let losses = 0;

flipButton.addEventListener('click', () => {

    const randomNumber = Math.random();
    const result = flipCoin(randomNumber);

    let guess = '';
    if(headsRadio.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }
    console.log(guess);
});

