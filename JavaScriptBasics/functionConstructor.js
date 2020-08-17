// to create a constructor which will act as a parent function to create objects with same properties

function Person(name, age, gender, city, country){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
    this.getDetails = function(){
        return (name + " is " + age + " years old. Is a " + gender+ ". From " + city + ", " + country + "."); 
    };
}

var cody = new Person("Cody", 22, "male", "Texas", "USA");
var luke = new Person("Luke", 25, "male", "Arizona", "USA");
console.log(cody);
console.log(luke);


console.log(cody.getDetails());
console.log(luke.getDetails());

luke.religion = "Christian";
luke.getReligion = function(){
    return this.religion;
};

console.log(cody);
console.log(luke);
