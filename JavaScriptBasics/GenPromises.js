function* gen() {
    yield taskOne();
    yield taskTwo();
    //yield taskThree();
    return;
}
var iter = gen();
var it = iter.next();
while (it.done == false) {
    console.log(it);
    it.value.then((message) => console.log(message)).catch(err => console.log(err));
    it = iter.next();
}
//console.log(it);

function taskOne() {
    return new Promise((resolve, reject) => {
        var a = true;
        if (a) {
            resolve("executed");
        }
        reject("Failed")
    });
}

function taskTwo() {
    return new Promise((resolve,reject) => {
        var b = 2;
        if (b==4) {
            resolve("Executed");
        }
        reject("Failed")
    });
}
