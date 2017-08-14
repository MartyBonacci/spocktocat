// accessor for the first value
function getFirstValue() {
	var firstValue = parseFloat(document.getElementById("firstNumber").value);
	return (firstValue); // return is used to return value when a function is called
}

// accessor for second value
function getSecondValue() {
	var secondValue = parseFloat(document.getElementById("secondNumber").value);
	return (secondValue); // return is used to return value when a function is called
}

// accessor for operation id
function getOperation(){
	onmouseenter=this.id;
	alert("++++++");
	return (this);
}

// mutator for answer
function setAnswer(newResult) {
	document.getElementById("answer").innerHTML = "= " + newResult;
}

// handles the calculations and displays the answer when mouse enter any operation symbol
function onOperandEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var operation = getOperation();

	function doMath() {
		switch(operation) {
			case "add":
				var total = firstValue + secondValue;
				break;
			case "subtract":
				var total = firstValue - secondValue;
				break;
			case "divide":
				var total = firstValue / secondValue;
				break;
			case "multiply":
				var total = firstValue * secondValue;
		}
		setAnswer(total);
	}
}
// handles the calculations and display of the answer when mouse enter multiplication symbol
function onMultiplyEnter() {
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

// get some bacon ipsum using AJAX call
$(document).ready(function() {
	$('#yummy').click(function() {
		$.ajax({
			url: "https://baconipsum.com/api/?type=meat-and-filler&paras=3&start-with-lorem=1",
			success: function(result) {
				$('#yummyText').html(result);
			}
		});
	});
});
