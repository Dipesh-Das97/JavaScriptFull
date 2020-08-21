function connect(location){
    return new Promise((resolve, reject)=>{
        if(location == "Google"){
            resolve(location)
        }else{
            reject("Connection Error")
        }        
    });
}

function respond(reply){
    return new Promise((resolve,reject)=>{
        resolve("Connection made with " + reply)
    })
}

async function connectionMade(){
    let a = await connect("Google");
    console.log("We waited for the first await");
    console.log(a);
    let b = await respond(a);
    console.log(b);
}
connectionMade();

/*connect("Google").then((message)=>{console.log(message);
    return respond(message)}).then(reply=>console.log(reply)).catch(error => console.log(error));*/