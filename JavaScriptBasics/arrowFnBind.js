let obj ={
    name : "Luke",
    getName : ()=>this.name
};
var cody = {
    name : "Cody"
};
//window.name = "Jake";
console.log(obj.getName.bind(cody)());

