/*var a = new Promise((resolve,reject)=>{
    throw new Error("Error in execution"); //reject(new Error("Error in exection"))
}).catch((error)=>console.log(error));


var b = new Promise((resolve,reject)=>{
    resolve("Executed");
    //throw new Error("Error in execution");
}).then((result)=>{throw new Error("Error in execution")}).catch((error)=>console.log(error));*/

var c = new Promise((resolve,reject)=>{
    reject(new Error("Error in execution")); //reject(new Error("Error in exection"))
}).catch((error)=>console.log(error));