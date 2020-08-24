var person = new Object();
person.name = 'Dipesh';
person.gender = 'male';
person.age = 21;
person.getName = function(city, country){
    return this.name + " is from " + city + ", " + country;
};
var person1 = {name: "Livi"};

//Application of call(), apply(), bind();
console.log("The new name is "+ person.getName.call(person1, "Chennai", "India"));
//console.log("The new name is "+ person.getName.apply(person1, ["Chennai", "India"]));
//console.log("The new name is "+ person.getName.bind(person1)("Chennai", "India"));

module.exports.callFunc = person.getName.call(person1, "Chennai", "India");

