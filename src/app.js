import flipCoin from '../src/flipCoin.js';
import setBalance from '../src/setBalance.js';

const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const coinImage = document.getElementById('coin-image');
const resultMessage = document.getElementById('result-message');
const headsRadio = document.getElementById('heads-radio');
const flipButton = document.getElementById('flip-button');
const balance = document.getElementById('current-balance');
const bet = document.getElementById('bet');

let wins = 0;
let losses = 0;
let money = 1000;

flipButton.addEventListener('click', () => {
    if(parseInt(bet.value) > money) {
        alert('You can not bet more than you have');
        return;
    }

    const randomNumber = Math.random();
    const result = flipCoin(randomNumber);
    let guess = '';
    // Stores the users guess as a variable
    if(headsRadio.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }
    const correctGuess = guess === result;
    
    // Stored file path to image in variable based off result
    const imgSrc = './assets/' + result + '.png';

    money = setBalance(correctGuess, parseInt(bet.value), money);
    balance.textContent = 'Money: $' + money;

    // Assign filepath to image
    coinImage.src = imgSrc;
    
    // Increments wins and losses and update DOM
    if(correctGuess) {
        wins++;
        winCount.textContent = 'Wins: ' + wins;
        resultMessage.textContent = 'Go to Vegas you lucky dog!!!';
    } else {
        losses++;
        lossCount.textContent = 'Losses: ' + losses;
        resultMessage.textContent = 'Did a black cat cross your path?';
    }
});

