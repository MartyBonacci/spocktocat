
// changes the value of the answer displayed
var result = document.getElementById("answer");

// handles the calculations and display of the answer when mouse enter addition symbol

function onPlusEnter() {
	var total = firstValue + secondValue;
	result.textContent = "=" + total;
}

// handles the calculations and display of the answer when mouse enter take away symbol
function onMinusEnter() {
	var total = firstValue - secondValue;
	result.textContent = "=" + total;
}


// handles the calculations and display of the answer when mouse enter guzinto symbol
function onDivisionEnter() {
	var total = firstValue / secondValue;
	result.textContent = "=" + total;
}

// handles the calculations and display of the answer when mouse enter multiplication symbol

function onMultiplyEnter () {
	var result = document.getElementById("answer").value;
//	var total = document.getElementById("testanswer");
	var firstValue = applyFirstValue();
	var secondValue = applySecondValue();
	console.log(firstValue);
	console.log(secondValue);
	var total = firstValue * secondValue;
	result.textContent = total;
}




function applyFirstValue() {
	var firstValue = document.getElementById("test1");
	var entered = document.getElementById("firstNumber").value;
	firstValue.textContent = entered;
}


function applySecondValue() {
	var secondValue = document.getElementById("test2");
	var entered = document.getElementById("secondNumber").value;
	secondValue.textContent = entered;
}

window.onload = function() {
	var add = document.getElementById("add");
	var takeAway = document.getElementById("subtract");
	var goesInto = document.getElementById("divide");

	add.addEventListener("mouseenter", onPlusEnter);
	takeAway.addEventListener("mouseenter", onMinusEnter);
	goesInto.addEventListener("mouseenter", onDivisionEnter);
};