const array = ["Cody", "Luke", "Jenny"];

test('Checks for item',()=>{
    expect(array).toContain("Luke");
})