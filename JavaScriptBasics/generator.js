function *generator(){
    yield "Cody";
    yield "Lexi";
    yield "Hazel";
    return;
    yield "Maze";
    //return "Hey";
}

var it = generator();
var iter = it.next();
while(iter.done == false){
    console.log(iter);
    iter = it.next();
}
