<<<<<<< HEAD
var obj = new Promise((resolve,reject)=>{
    var a = true
    if(!a){
        resolve("Executed");
    }else{
        reject("Failed");
    }
});

obj.then(result => console.log(result),error => console.log(error)).finally(()=>console.log("Finally executed"));
=======
var obj = new Promise((resolve,reject)=>{
    var a = true
    if(a){
        resolve("Executed");
    }else{
        reject("Failed");
    }
});

obj.finally(()=>console.log("Finally executed")).then(result => console.log(result),error => console.log(error));
>>>>>>> b7aadd6c1edafdab4f68f359180163ccab925f4a
