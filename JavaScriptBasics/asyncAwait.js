/*async function f(){
    return "Success";
}
f().then(message => console.log(message));*/

/*async function f(){
    let a = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("Executed"),5000);
    }
    );
    let b = await a;
    console.log(b);
    console.log("Waited for Promise")
}
f().then(() => console.log("Outside Promise"));*/

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result)
  }
  asyncCall();