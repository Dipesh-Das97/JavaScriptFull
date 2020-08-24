function showResult(func){
    return "Result of addition :" + func();
}

function sum(){
    return 7 + 8;
}
module.exports = {showResult,sum};
console.log(showResult(sum));
