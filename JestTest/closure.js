function closure(b){
    var a = 10
    function innerfunction(){
        return a * b;
    }
    return innerfunction();
}

module.exports = closure;

