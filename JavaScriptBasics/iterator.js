var array = [1,2,3,"Hello",true];
let iterator = array[Symbol.iterator]();

var a = iterator.next();
//console.log(a);
while(a.done === false){
    console.log(a);
    a = iterator.next();
}