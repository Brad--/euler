function largestPrime(num) {
	var i;
	var factor = num;
	for(i = 2; i < num; i++) {
		factor = num / i;
		if(factor % 1 === 0 && isPrime(factor))
			return factor;
	}
}

function isPrime(n) {
	if(n == 2 || n == 3)
		return true;
	if(n % 2 === 0 || n % 3 === 0)
		return false;

	i = 5;
	w = 2;

	while(i * i <= n) {
		if(n % i === 0)
			return false;
		i += w;
		w = 6 - w;
	}

	return true;
}

console.log(largestPrime(600851475143));