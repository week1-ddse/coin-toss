function setBalance(correctGuess, betAmount, balance) {
    if(correctGuess) {
        balance += betAmount;
    } else {
        balance -= betAmount;
    }
    return balance;
}

export default setBalance;