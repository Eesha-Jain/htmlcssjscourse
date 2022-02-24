function calculate() {	
	var base = document.getElementById("base_number").value;
	var pwr = document.getElementById("power").value;
	
	if (base == null || pwr == null) {
		var result = "INVALID";
	} else {		
		var result = base ** pwr;
	}
	
	document.getElementById("result").innerHTML = result;
}

var arr = [5, 6, 7, 8, 10, 2];
arr[2] = 20;