var value = "";
input = false;

function space(num) {
	if (input) {
		input = false;
		clearing();
	}
	document.getElementById("output").innerHTML += num;
	value += num;
}

function clearing() {
	document.getElementById("output").innerHTML = "";
	value = "";
}

function equal() {
	document.getElementById("output").innerHTML = eval(value);
	input = true;
}