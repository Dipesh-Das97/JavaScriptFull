var obj = new Promise((resolve,reject)=>{
        reject("Failed");
});

obj.finally(()=>console.log("Finally executed")).catch(error => console.log(error));