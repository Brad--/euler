function evenFibSum(limit) {
	var a = 1, b = 2, temp, sum = 2;
	while(b < limit) {
		temp = a + b;
		a = b;
		b = temp;
		if(b % 2 === 0)
			sum += b;
	}
	return sum;
}

console.log(evenFibSum(4000000));