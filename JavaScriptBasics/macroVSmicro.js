console.log("Synchronous 1");
setTimeout(()=>console.log("Macro task"),0);//macro
Promise.resolve().then(()=>console.log("Inside Promise"));//micro
console.log("Synchronous 2");