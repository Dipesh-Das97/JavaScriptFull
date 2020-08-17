//Global scope:
var  a = 12;

function multiply(b){
    //var a in local or function scope availabe only inside the function.
    // var a in global scope has been shadowed
    var a = 5;
    console.log("The value of 'a' inside function is: " + a);
    return "The return value of function multiply is: " + (a * b);
}
//multiply(10);
console.log(multiply(10));
//Global scope:
console.log("In global scope value of a: " + a);

var c = "hello";
if(true){ 
    //inside block scope
    let c = "Yo";
    console.log("Value of c inside the block scope: "+ c);
}

console.log("Value of c inside the global scope: "+ c);