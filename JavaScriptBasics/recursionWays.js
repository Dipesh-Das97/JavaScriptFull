//arguments.callee for factorial
var a = function(n){
    return n<=1? 1:arguments.callee(n-1) * n;
}
console.log(a(5));

//recursion for fibonacci
function fibonacci(n){
    if(n == 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}