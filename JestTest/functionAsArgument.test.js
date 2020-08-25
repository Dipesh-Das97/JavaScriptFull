const func = require('../JestTest/functionAsArgument');
const sum = func.sum;
const multiply = func.multiply;

test('Passing function as an argument', ()=>{
    expect(multiply(sum)).toBe(80);
})
