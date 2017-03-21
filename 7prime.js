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

function nextPrime(start) {
	var prime = false;
	while(!prime) {
		prime = isPrime(start);
		if(prime)
			return start;
		else 
			start++;
	}
}

function xPrime(x) {
	var curr = 0;
	for(var i = 0; i <= x; i++) {
		curr = nextPrime(curr + 1);
	}
	return curr;
}

console.log(xPrime(10001));