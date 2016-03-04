function timeTillDoomsday() {
	var timeRemaining = new Date(2016, 10, 8, 19, 0, 0, 0);
	console.log(timeRemaining);
};

function initTimer() {
	var timer = document.getElementById('countdown-wrapper');
	var weeks = timer.querySelector('#weeks');
	var days = timer.querySelector('#days');
	var hours = timer.querySelector('#hours');
	var minutes = timer.querySelector('#minutes');
	var seconds = timer.querySelector('#seconds');

	timeTillDoomsday();
};

function updateTimer() {

};

initTimer();