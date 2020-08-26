const foo =  require('./eventLoop');

test('checks for callback', (done)=>{
    function callback(data){
        try{
            expect(data).toBe("B");
            done();
        }
        catch(err){
            done(err);
        }
    }
    foo(callback);
})