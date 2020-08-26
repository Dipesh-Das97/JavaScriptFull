function foo(callback){
    setTimeout(()=>callback("B"),5000);
}

module.exports = foo;