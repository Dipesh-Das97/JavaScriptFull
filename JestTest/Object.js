var person = new Object();
person.name = "Dipesh";
person.gender = "Male"
person.getName = function () {
    return this.name;
}
person.getGender = function () {
    return this.gender;
}

module.exports.name = person.getName;
module.exports.gender = person.getGender;