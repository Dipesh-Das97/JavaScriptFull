/*var obj1  = new Promise((resolve, reject) => {
    let b = 1+2;
    if(b == 2){
        resolve("Success");
    }
    setTimeout(()=>reject("Failed"),5000);
    
});*/

var obj1  = new Promise((resolve, reject) => {
    let b = 1+2;
    if(b == 2){
        resolve("Success");
    }
    setTimeout(()=>reject("Failed"),5000);
    
});

obj1.then((message)=>console.log("Inside then " + message)).catch((message)=>console.log("Inside catch " + message));
