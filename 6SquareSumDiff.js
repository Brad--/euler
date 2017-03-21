function sumSquareDiff(n) {
	var sum = sumSquares = 0;

	for(var i = 0; i <= n; i++) {
		sum += i;
		sumSquares += i * i;
	}
	sum = sum * sum;

	return sum - sumSquares;
}

console.log(sumSquareDiff(100));