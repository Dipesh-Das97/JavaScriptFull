const cal = require('./Calculator');
//ADD
test('Test switch case: ', () => {
    expect(cal(5,2,'+')).toBe(7);
})
//SUB
test('Test switch case: ', ()=>{
    expect(cal(5,2,'-')).toBe(3);
})
//DIV
test('Test switch case: ', ()=>{
    expect(cal(6,2,'/')).toBe(3);
})
//MUL
test('Test switch case: ', ()=>{
    expect(cal(5,2,'*')).toBe(10);
})

test('Test switch case: ', ()=>{
    expect(cal(5,2,'=')).toBe("Not VALID Opeartor!");
})