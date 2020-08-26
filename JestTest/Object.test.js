const func = require('./Object')

const getName = func.getName;
const name = func.name;
const getGender = func.getGender;
const gender = func.gender;

test('check for the default values',()=>{
expect(getName()).toEqual(name);
expect(getGender()).toEqual(gender);
});
