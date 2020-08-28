function range(start, end, count){
        let current = start;
        return {
            [Symbol.iterator] : function(){
                return {
                    next() {
                        let result;
                        if(current <= end){
                            result = {value : current, done : false};
                            console.log(result);
                            current += count;
                            return result    
                        }
                        return {done:true}
                    }
                };
            }
        };
    }
    console.log([...range(1,10,2)]);
