function promises(){
    return new Promise((resolve,reject)=>{
        var a = true;
        if(a){
            setTimeout(()=>resolve("Success"),5000);
        }
        else{
            setTimeout(()=>reject("Failed"),5000);
        }
    });
}
module.exports= promises;
