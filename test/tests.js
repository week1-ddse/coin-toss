import flipCoin from '../src/flipCoin.js';
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