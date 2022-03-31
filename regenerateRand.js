// generate a new random number between 1 and 100 from a random number between 9 and 20
function regenerateRand(randNum) {
    // check if random number is within scope
    if(randNum >= 9 && randNum <= 20) {
        // get minimum and maximum multipliers
        var minMulRand = (1 / randNum).toFixed(2);
        var maxMulRand = (100 / randNum).toFixed(2);
        // generate random number the minumum and maximum multipliers
        dgn = (Math.random() * (maxMulRand - minMulRand) + parseFloat(minMulRand)).toFixed(2);
        // generate the random number 
        return Math.round(randNum * dgn);
    } else {
        return "Random Number Out of Scope";
    }
    

}
module.exports = regenerateRand;