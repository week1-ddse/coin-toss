const test = QUnit.test;
function flipCoin(number) {
    if(number < 0.5) {
        return 'heads';
    }
    return 'tails';
}


test('return heads if number is less than .5', assert => {

    //arrange
    const number = 0.3;
    const expected = 'heads';

    //act
    const actual = flipCoin(number);
    //assert
    assert.equal(expected, actual);

});