/* Helper functions */
/* ====================== */

function numberToPx(number) {
	return number + "px"; 
}

function getMilliseconds(timestampStr) {
	var timestampStrSplit = timestampStr.split(".");
	var milli = Date.parse("January 1, 1970 " + timestampStrSplit[0] + " UTC");
	if (timestampStrSplit.length == 1)
		return milli;
	else (timestampStrSplit.length == 2)
		return milli + parseInt(timestampStrSplit[1] * 100);
}

function getSeconds(timestampStr) {
	return getMilliseconds(timestampStr) / 1000;
}