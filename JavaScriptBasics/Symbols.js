var a = Symbol("Hello");
var b = a;
var c = Symbol("Hello");
/*console.log(a === b);
console.log(a === c);
b = Symbol(123);
console.log(a,b);

var s = Symbol.for(a);
console.log(s);

var k = Symbol.keyFor(a);
console.log(k);*/
var obj ={
    name : "Dipesh",
    [a] : "a"
}
for(var i in obj){
    console.log(i + " : " + obj[i]);
}