function closure(){
    var a = 10
    return function(b){
        //var b = 15;
        return a * b;
    }
    
}
module.exports = closure;
console.log(closure()(15));
