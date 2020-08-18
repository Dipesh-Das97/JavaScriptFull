function closure(){
    var a = 10
    return function(b){
        //var b = 15;
        return a * b;
    }
    
}
console.log(closure()(15));

