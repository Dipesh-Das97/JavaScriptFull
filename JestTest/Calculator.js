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
module.exports = cal;
console.log(cal(14,7,'/'));