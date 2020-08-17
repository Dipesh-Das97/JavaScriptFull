var myNumber = new Number(45);
var myBoolean = new Boolean(false);
var myString = new String('Bhushan');
var myArray = new Array(1,2,3);
var myError = new Error("Problem");
var myObject = new Object();
var myDate = new Date();
var myFunction = new Function("a","b","return a*b");
var myRegExp = new RegExp('\bt[a-z]+\b');

console.log(myNumber.constructor);
console.log(myString.constructor);
console.log(myBoolean.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);

console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(myObject);
console.log(myArray[2]);
console.log(myFunction);
console.log(myDate);
console.log(myRegExp);