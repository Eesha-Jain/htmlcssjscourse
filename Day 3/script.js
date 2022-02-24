document.write("Hello World");
//window.alert("alert!");
console.log("I am logging this.");

/*var x = 4;
var y = 6;

var z = x + y;
z += 1;*/

var num = 0;

function myFunction() {
	num++;
	//console.log("Button clicked " + num.toString() + " times");
	document.getElementById("h3Tag").innerHTML = num;
}