function fibonacci(num) {
// your code here
	let t1 = 0, t2 = 1, t3;
	if(num == 1){
		return t1;
	}
	else if(num == 2){
		return t2;
	}
	for(let i = 2; i < num; i++){
		t3 = t1 + t2;
		t1 = t2;
		t2 = t3;
	}
	return t3;
}

module.exports = fibonacci;
