function sum(a,b){
    return a + b;
}
function multiply(sum){
    return sum(5,3)*10;
}

module.exports.sum = sum;
module.exports.multiply = multiply;
console.log(multiply(sum));