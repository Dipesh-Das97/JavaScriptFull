var obj = new Promise((resolve,reject)=>{
    var a = true
    if(!a){
        resolve("Executed");
    }else{
        reject("Failed");
    }
});

obj.then(result => console.log(result),error => console.log(error)).finally(()=>console.log("Finally executed"));