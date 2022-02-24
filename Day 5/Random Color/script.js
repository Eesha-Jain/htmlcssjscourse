function newColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	
	var color = "RGB(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";
		
	document.getElementById("color-value").innerHTML = color;
	document.body.style.backgroundColor = color;
}