function largestPalindrome() {
	var result = 0;

	for(var a = 100; a <= 999; a++) {
		for(var b = 100; b <= 999; b++) {
			var prod = a * b;
			result = isPalindrome(prod) && prod > result ? prod : result; 
		}
	}
	return result;
}

function isPalindrome(num) {
	num = num.toString();
 	var mid = Math.floor((num.length) / 2);

 	if(num.length % 2 === 1)
 		return num.substring(0, mid) === num.substring(mid + 1).split("").reverse().join("");
	else
		return num.substring(0, mid) === num.substring(mid).split("").reverse().join("");
}

console.log(largestPalindrome());