let obj = {
    name: "Luke",
    getName: () => this.name
};
var cody = {
    name: "Cody"
};
//window.name = "Jake";
console.log(obj.getName.bind(cody)());

var a = {
    name: "Dipesh",
    get: () => { return this.name; },
    sammy() {
        let c = () => { return this.name; }
        return c();
    }
}

