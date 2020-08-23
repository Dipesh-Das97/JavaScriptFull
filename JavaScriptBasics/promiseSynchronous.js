var obj1  = new Promise((resolve, reject) => {
    let b = 1+1;
    if(b == 2){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

//obj1.then((message)=>console.log("Inside then " + message)).catch((message)=>console.log("Inside catch " + message));

var obj2  = new Promise((resolve, reject) => {
    let connection =  true;
    if(connection == true){
        resolve("Successful connection");
    }else{
        reject("Connection Failed");
    }
});

Promise.all([obj1,obj2]).then((message)=>console.log(message)).catch((message)=>console.log(message));
Promise.allSettled([obj1]).then((message)=>console.log(message)).catch((message)=>console.log(message));

