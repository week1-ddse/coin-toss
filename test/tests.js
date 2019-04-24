import flipCoin from '../src/flipCoin.js';
import setBalance from '../src/setBalance.js';
const test = QUnit.test;

test('return heads if number is less than .5', assert => {
    //arrange
    const number = 0.3;
    const expected = 'heads';
    //act
    const actual = flipCoin(number);
    //assert
    assert.equal(expected, actual);
});

test('return tails if number is equal to or more than .5', assert => {
    //arrange
    const number = 0.6;
    const expected = 'tails';
    //act
    const actual = flipCoin(number);
    //assert
    assert.equal(expected, actual);
});

test('if correct add bet amount to money', assert => {
    //arrange 
    const correctGuess = true;
    const betAmount = 500;
    const balance = 1000;
    const expected = 1500;
    //act
    const actual = setBalance(correctGuess, betAmount, balance);
    //assert
    assert.equal(expected, actual);
});