class User {
    constructor(name, dept, score) {
        this.name = name;
        this.department = dept;
        this.score = score;
    }
    userId() {
        console.log(this.name + " is from " + this.department);
        return this;
    }
    userScore() {
        console.log("The score is: " + this.score);
        return this;
    }
}

var cody = new User("Cody", "EEE", 8.18);
var luke = new User("Luke", "CSE", 7.9);

console.log(cody.userId().userScore());
cody.foo = "Hello";
console.log(cody);
console.log(luke);

luke.__proto__.foo = "Hey";
console.log(cody);
console.log(luke);

User.prototype.foo = "Great";
console.log(cody);
console.log(luke);
console.log(cody.foo);
console.log(luke.foo);

class Person extends User{
    constructor(name,dept,score,rollNo){
        super(name,dept,score);
        this.rollNo = rollNo;
    }
    getRoll(){
        console.log("Roll No: " + this.rollNo);
    }
}

let jess = new Person("Jess", "IT", 9.2, 7810);
console.log(jess);