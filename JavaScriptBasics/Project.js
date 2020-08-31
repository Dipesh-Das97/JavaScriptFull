var name = prompt("Enter your name: ");
alert("Welcome " + name + " to our online calculator!");

var first = prompt("Enter the first number: ");
var a = parseInt(first);
var second = prompt("Enter the second number: ");
var b = parseInt(second);
var oper = prompt("Enter the operator: ");

var result = cal(a, b, oper);

alert("Here is your result: " + result);

function cal(a, b, oper) {
    switch (oper) {
        case '+':
            tot = a + b;
            //cal_done = true;
            break;
        case '-':
            tot = a - b;
            //cal_done = true;
            break;
        case '/':
            tot = a / b;
            //cal_done = true;
            break;
        case '*':
            tot = a * b;
            //cal_done = true;
            break;
        default:
            return "Not VALID Opeartor!";
    }
    return tot;
}
//module.exports = cal;
//console.log(cal(14,7,'/'));
