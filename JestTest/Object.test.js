const obj = require('./Object')
const name = obj.name;
const gender = obj.gender;

test('check for the default values',()=>{
expect(name()).toBe("Dipesh");
expect(gender()).toBe("Male");
});