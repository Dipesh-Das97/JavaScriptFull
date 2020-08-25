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

luke.work = "IT Engineer"; //Added only to luke not cody

luke.constructor.prototype.religion = "Christian"; //Added to base constructed hence present as __proto__ in luke & cody
Person.getReligion = function(){     //=> Person.prototype.getReligion
    return this.religion;
};

cody.__proto__.salary = 30000;
//why can't we use luke.prototype.religion?? => luke.prototype returns undefined. ",prototype" associated with cons() not obj
console.log(luke);

console.log(cody.religion);
