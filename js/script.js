
// accessor for the first value
function getFirstValue() {
	var firstValue = parseFloat(document.getElementById("firstNumber").value);
	return(firstValue);
}

// accessor for second value
function getSecondValue() {
	var secondValue = parseFloat(document.getElementById("secondNumber").value);
	return(secondValue);
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
	setAnswer(total);
}

// handles the calculations and display of the answer when mouse enter take away symbol
function onMinusEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue - secondValue;
	setAnswer(total);
}


// handles the calculations and display of the answer when mouse enter guzinto symbol
function onDivisionEnter() {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue / secondValue;
	setAnswer(total);
}

// handles the calculations and display of the answer when mouse enter multiplication symbol
function onMultiplyEnter () {
	var firstValue = getFirstValue();
	var secondValue = getSecondValue();
	var total = firstValue * secondValue;
	setAnswer(total);
}

function applyFirstValue() {
	var firstValue = document.getElementById("test1");
	var entered = document.getElementById("firstNumber").value;
	firstValue.innerHTML = entered;
}

function applySecondValue() {
	var secondValue = document.getElementById("test2");
	var entered = document.getElementById("secondNumber").value;
	secondValue.innerHTML = entered;
}

window.onload = function() {
	document.getElementById("firstNumber").value = Math.PI;
	document.getElementById("secondNumber").value = Math.E;
};