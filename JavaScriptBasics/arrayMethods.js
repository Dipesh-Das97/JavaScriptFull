var a = [1,2,3,5];
var b = ["Hello", ", ", "how", " are", " you?"];

//forEach()
var sum = 0;
a.forEach((e) => sum += e);
console.log(sum);

//map()

console.log(a.map((i)=> i*10));

//reduce()
console.log(a.map((i)=> i*10).reduce((t,i)=>t+i));
console.log(b.reduce((t,i)=> t + i, "Hola "));

//filter
//console.log(a.filter((e)=>e%3===0));
console.log(a.map((i)=> i*3).filter((e)=>e%5===0));