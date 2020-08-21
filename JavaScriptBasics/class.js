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