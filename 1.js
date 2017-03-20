function solve(below) {
	var sum = 0;
	for(var i = 0; i < below; i++) {
		if(i % 3 === 0)
			sum += i;
		else if(i % 5 === 0)
			sum += i;
	}
	return sum;
}

console.log(solve(1000));