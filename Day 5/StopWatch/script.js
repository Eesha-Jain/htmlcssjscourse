var milli = 0;
var sec = 0;

function reset() {
	stop();
	document.getElementById("milliseconds").innerHTML = "00";
	document.getElementById("seconds").innerHTML = "00";
	milli = 00;
	sec = 00;
}

function timer() {
	if (milli == 59) {
		milli = 0;
		sec++;
	} else {
		milli++;
	}
		
	document.getElementById("milliseconds").innerHTML = milli ;
	document.getElementById("seconds").innerHTML = sec;
}