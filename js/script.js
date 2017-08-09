
// accessor for the first value
function getFirstValue() {
	var firstValue = parseFloat(document.getElementById("firstNumber").value);
	return(firstValue); // return is used to return value when a function is called
}

// accessor for second value
function getSecondValue() {
	var secondValue = parseFloat(document.getElementById("secondNumber").value);
	return(secondValue); // return is used to return value when a function is called
}

// mutator for answer
function setAnswer(newResult) {
	document.getElementById("answer").innerHTML = "= " + newResult;
}

// handles the calculations and display of the answer when mouse enter addition symbol
function onPlusEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue + secondValue;
	setAnswer(total); // calls mutator function which sends the total out to the universe
}

// handles the calculations and display of the answer when mouse enter take away symbol
function onMinusEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue - secondValue;
	setAnswer(total); // calls mutator function which sends the total out to the universe
}

// handles the calculations and display of the answer when mouse enter guzinto symbol
function onDivisionEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue / secondValue;
	setAnswer(total); // calls mutator function which sends the total out to the universe
}

// handles the calculations and display of the answer when mouse enter multiplication symbol
function onMultiplyEnter () {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue * secondValue;
	setAnswer(total); // calls mutator function which sends the total out to the universe
}

// puts starting value in input boxes to prevent error on load... and to make it look cool
window.onload = function() {
	document.getElementById("firstNumber").value = Math.PI;
	document.getElementById("secondNumber").value = Math.E;
};



/* experimenting with ajax call

$.ajax({
	method: "GET",
	url: "foo.php" }).done(function(reply) {
		console.log("AJAX server reply: " + reply);
	});


function onpiggy() {
$(document).ready(function()
{
	$("#baconButton").click(function()
	{
		$.getJSON('https://baconipsum.com/api/?callback=?',
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' },
			function(baconGoodness)
			{
				if (baconGoodness && baconGoodness.length > 0)
				{
					$("#baconIpsumOutput").html('');
					for (var i = 0; i < baconGoodness.length; i++)
						$("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
					$("#baconIpsumOutput").show();
				}
			});
	});
});
}
*/