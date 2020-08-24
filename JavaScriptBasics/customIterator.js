

try{
    function range(start, end, count){
        let current = start;
        return {
            [Symbol.iterator] : function(){
                return {
                    next() {
                        let result;
                        while(current <= end){
                            result = {value : current, done : false};
                            
                            console.log(result);
                            current += count;
                            
                        }
                        //return {value : current, done : true};
                    }
                };
            }
        };
    }
    console.log([...range(1,10,2)]);
}
catch(err){
    console.log("Some error");
}