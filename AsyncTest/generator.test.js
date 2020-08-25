var generator = require('./generator');


var iter = generator();
var it = iter.next();
var array = new Array();
test('Generator',()=>{
    let i=0;
    while(it.done == false){
        array[i++]=it.value;
        it = iter.next();
    }
    expect(array).toEqual(['Cody','Lexi', 'Hazel'])
})