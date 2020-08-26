var person = new Object();
person.name = "Dipesh";
person.gender = "Male"
person.getName = function () {
    return person.name;
}
person.getGender = function () {
    return person.gender;
}

console.log(person);
module.exports.getName = person.getName;
module.exports.name = person.name;
module.exports.getGender = person.getGender;
module.exports.gender = person.gender;

