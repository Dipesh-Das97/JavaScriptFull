//using a literal
var  a = { name: "Orange",
type: "fruit",
purpose : function(){return "eat"}};

/*console.log("The object is:");
console.log(a);
console.log(a["purpose"]());
console.log(a["type"]);*/

//using new and Object()
var b = new Object();
b.name = "Mango",
b.type = "fruit";
b.purpose = a.purposefunction(){
    return "also eat";
};
console.log(b);

//Using function constructor 
/*var Person = function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {return this.gender;};
   };
var cody = new Person("Cody", 33, 'male');
var jenna = new Person("Jenna", 26, 'female');
cody.spouce = "Henna";
console.log(cody);
console.log(jenna);*/

