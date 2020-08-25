//Creating classes Dynamically on-demand
function makeClass(word) {
    return class {
        name = "Luke";//class field
        sayHi() {//class method linked with .prototype
            console.log(word);
        };
    };
}


let User = makeClass("Hello");//User becomes class name 
new User().sayHi();
console.log(new User().name);
