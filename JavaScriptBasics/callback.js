function showResult(func){
    return "Result of addition :" + func();
}

function sum(){
    return 7 + 8;
}

console.log(showResult(sum));