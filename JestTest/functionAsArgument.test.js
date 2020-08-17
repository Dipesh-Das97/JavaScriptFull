var func = require('../functionAsArgument');
sum = func.sum;
multiply = func.multiply;

test('Passing function as an argument', ()=>{
    expects(multiply(sum)).toBe(80);
})