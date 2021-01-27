//Check if roll-button is pressed
document.getElementById("roll-button").addEventListener("click", function() {
	//call the rollDice on every click
	rollDice();
});

var total = document.getElementById('totals');
total = 0;
var one_count = 0;
var two_count = 0;
var three_count = 0;
var four_count = 0;
var five_count = 0;
var six_count = 0;


document.addEventListener('rollDice', function(e) {
	total++;
	document.getElementById("totals").getElementsByTagName("p")[0].lastChild.innerHTML = total;
	var currentDice = event.detail.value;
	if (currentDice === 1) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template1").innerHTML;
		one_count++;
		document.getElementById("ones").getElementsByTagName("p")[0].innerHTML = one_count;
	} else if (currentDice === 2) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template2").innerHTML;
		two_count++;
		document.getElementById("twos").getElementsByTagName("p")[0].innerHTML = two_count;
	} else if (currentDice === 3) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template3").innerHTML;
		three_count++;
		document.getElementById("threes").getElementsByTagName("p")[0].innerHTML = three_count;
	} else if (currentDice === 4) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template4").innerHTML;
		four_count++;
		document.getElementById("fours").getElementsByTagName("p")[0].innerHTML = four_count;
	} else if (currentDice === 5) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template5").innerHTML;
		five_count++;
		document.getElementById("fives").getElementsByTagName("p")[0].innerHTML = five_count;
	} else if (currentDice === 6) {
		document.getElementById("roll-button").innerHTML = document.getElementById("template6").innerHTML;
		six_count++;
		document.getElementById("sixes").getElementsByTagName("p")[0].innerHTML = six_count;
	};
	
	console.log(currentDice);
});
