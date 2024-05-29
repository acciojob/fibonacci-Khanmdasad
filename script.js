function fibonacci(num) {
// your code here
	let t1 = 0, t2 = 1, t3;
	for(let i = 2; i < num; i++){
		t3 = t1 + t2;
		t1 = t2;
		t2 = t3;
	}
	return t3;
}

module.exports = fibonacci;
