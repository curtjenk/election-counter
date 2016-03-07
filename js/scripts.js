var endTime = new Date(2016, 10, 8, 19, 0, 0, 0);
//next line for testing only
//endTime = new Date(2016, 2, 4, 16, 12, 0, 0);
var endTimeStamp = Date.parse(endTime);

var timer = document.getElementById('countdown-wrapper');
var weeks = timer.querySelector('#weeks');
var days = timer.querySelector('#days');
var hours = timer.querySelector('#hours');
var minutes = timer.querySelector('#minutes');
var seconds = timer.querySelector('#seconds');


function timeTillDoomsday() {
	
	//var now = new Date();	
	//var nowTimeStamp = Date.parse(now);
	var nowTimeStamp = Date.now();
	
	var timeDifference = endTime - nowTimeStamp;

//Cool stuff.  Logic to "count down"
	var timeInSeconds = (timeDifference / 1000);
	var seconds = Math.floor( timeInSeconds % 60);
	var minutes = Math.floor( (timeInSeconds / 60) % 60);
	var hours = Math.floor( (timeInSeconds / (60 * 60)) % 24);
	var days = Math.floor( (timeInSeconds / (60 * 60 * 24)) % 7);
	var weeks = Math.floor( timeInSeconds / (60 * 60 * 24 * 7));
	console.log(timeDifference);
 	// console.log("Election Day is " + endTime);
	// console.log(" Today is " + now);
	
	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		diffInSeconds: timeInSeconds
	};
	// console.log(timeObject);

	if (timeDifference <= 100 )
	{
		//console.log()
		window.clearInterval(myIntervalVar);
		document.images['podium'].src = "img/patrotic_animated_4th-of-July-fireworks.gif";
	}

	return timeObject;
};



function initTimer() {
	

	var timeObjectReturned = timeTillDoomsday();

	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;

};

function updateTimer() {

};

initTimer();

var myIntervalVar = window.setInterval(initTimer, 300);
//Use below to stop after a period of time.
//window.setTimeout(function() {
//		window.clearInterval(myVar);
//		}, 10000
//	);



