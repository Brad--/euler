function smallestMultiple(start, end) {
	var curr = end;
	for(var i = end; i >= start; i--) {
		if(curr % i !== 0){
			i = end;
			curr += end;
		}
	}
	return curr;
}

console.log(smallestMultiple(1, 20));