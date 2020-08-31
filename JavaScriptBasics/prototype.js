function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var ellie = new Person("Ellie", 23, "Female");
var jenny = new Person("Jenny", 32, "Female");

Person.prototype.getName = function () {
    return this.name;
}

ellie.__proto__.job = "IT";
console.log(jenny.job);//present in __proto__ of jenny as well

jenny.job = "Manager"//appers in object