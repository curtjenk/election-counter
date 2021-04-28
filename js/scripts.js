var endTime = new Date(2021, 10, 8, 19, 0, 0, 0);

var timer = document.getElementById('countdown-wrapper');
var weeks = timer.querySelector('#weeks');
var days = timer.querySelector('#days');
var hours = timer.querySelector('#hours');
var minutes = timer.querySelector('#minutes');
var seconds = timer.querySelector('#seconds');

var countDownToggle = true;


function timeTillDoomsday() {
	
	var nowTime = Date.now();
	var timeDifference = endTime - nowTime;

//Cool stuff.  Logic to "count down"
	var timeInSeconds = (timeDifference / 1000);
	var seconds = Math.floor( timeInSeconds % 60);
	var minutes = Math.floor( (timeInSeconds / 60) % 60);
	var hours = Math.floor( (timeInSeconds / (60 * 60)) % 24);
	var days = Math.floor( (timeInSeconds / (60 * 60 * 24)) % 7);
	var weeks = Math.floor( timeInSeconds / (60 * 60 * 24 * 7));
	
	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		diffInSeconds: timeInSeconds
	};

	if (timeDifference <= 100 )
	{
		window.clearInterval(myIntervalVar);
		document.images['podium'].src = "img/patrotic_animated_4th-of-July-fireworks.gif";
	}

	return timeObject;
};

function toggleCountDown()
{
	if (countDownToggle)
	{
		countDownToggle = false;
		window.clearInterval(myIntervalVar);
	} else {

		countDownToggle = true;
		initTimer();
		myIntervalVar = window.setInterval(initTimer, 300);
	}

	// console.log(myIntervalVar);
	//window.clearInterval(myIntervalVar);
	// console.log(myIntervalVar);
}

function initTimer() {
	

	var timeObjectReturned = timeTillDoomsday();

	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;

};

function setEndDate() {
	var yyyy = parseInt(document.getElementById('inputYear').value);
	var month = parseInt(document.getElementById('inputMonth').value);  //Month is off by one in javascript!!!!
	var day = parseInt(document.getElementById('inputDay').value);

	if (!isValidDate(yyyy, month, day))
	{
		alert("Please enter a valid future Year, Month, Day or Today's date");
	} else {
		endTime = new Date(yyyy, month - 1, day, 19, 0, 0, 0);
	}
}

function isValidDate(inputYear, inputMonth, inputDay)
{
	console.log(inputYear, inputMonth, inputDay);
	
    if (!isValidDateNumber('year', inputYear)
		|| !isValidDateNumber('month', inputMonth)
		|| !isValidDateNumber('day', inputDay))
	{
		return false;
	} else 
	{
		var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth(); //January is 0!
    	var yyyy = today.getFullYear();
		if (inputYear === yyyy)
		{
			if (inputMonth < mm || (inputMonth === mm && inputDay < dd))
			{
				return false;
			} 
		}
	}
	return true;

}

function isValidDateNumber(type, value) {
	var answer = true;
	if (isNaN(value)) {
		answer = false; 
	}
	if (value === 0 && type != 'month') { //allow for month off by 1...can be zero for January.
		answer =  false;
	}
	if (type === 'month' && value > 12) {
		answer =  false;
	}
	if (type === 'day' && value > 31) {
		answer =  false;
	}
	if (type === 'year') {
		// console.log("checking year of " + value);
	  var currentYear = (new Date()).getFullYear(); 
	  if (value < currentYear) {
			answer =  false;
		}
	}
	// console.log("final answer for type " + type + " of value " + value + " is " + answer);
	return answer;

};

initTimer();

var myIntervalVar = window.setInterval(initTimer, 300);
//Use below to stop after a period of time.
//window.setTimeout(function() {
//		window.clearInterval(myVar);
//		}, 10000
//	);



