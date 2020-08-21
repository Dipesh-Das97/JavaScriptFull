var callback =  function(){
    console.log("B");
}

var foo = function(){
    console.log("A");
    setTimeout(callback, 0);
    console.log("C");
}
foo();
