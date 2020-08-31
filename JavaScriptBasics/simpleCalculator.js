function getInput(){
    var name = document.getElementById("text1").value;
    alert("Welcome " + name + " to our online calculator!");

    var first = document.getElementById("text2").value;
    var a = parseInt(first);
    var second = document.getElementById("text3").value;
    var b = parseInt(second);
    var oper = document.getElementById("text4").value.toString();
    //alert("Result: "+ first+" "+oper.toString()+" "+second);
    cal(a, b, oper);
}
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
        alert(tot);
}