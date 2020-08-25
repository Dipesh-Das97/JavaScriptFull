function *generator(){
    yield "Cody";
    yield "Lexi";
    yield "Hazel";
    return;
}

module.exports = generator;
var it = generator();
var iter = it.next();
while(iter.done == false){
    
    console.log(iter);
    iter = it.next();
}
console.log(iter);
