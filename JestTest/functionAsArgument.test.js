const func = require('../JestTest/functionAsArgument');
const sum = func.sum;
const multiply = func.multiply;

test('Passing function as an argument', ()=>{
    expect(multiply(sum)).toBe(80);
<<<<<<< HEAD
})
=======
})
>>>>>>> b7aadd6c1edafdab4f68f359180163ccab925f4a
