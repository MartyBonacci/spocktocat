// changes the value of the answer displayed
var result = document.getElementById("answer");
var firstValue = 7;
var secondValue = 9;


// handles the calculations and display of the answer when mouse enter addition symbol
var plus = document.getElementById("add");
var onPlusEnter = function() {
	var total = firstValue + secondValue;
	result.textContent = "=" + total;
};
plus.addEventListener("mouseenter", onPlusEnter);

// handles the calculations and display of the answer when mouse enter take away symbol
var takeAway = document.getElementById("subtract");
var onMinusEnter = function() {
	var total = firstValue - secondValue;
	result.textContent = "=" + total;
};
takeAway.addEventListener("mouseenter", onMinusEnter);


// handles the calculations and display of the answer when mouse enter guzinto symbol
var goesInto = document.getElementById("divide");
var onDivisionEnter = function() {
	var total = firstValue / secondValue;
	result.textContent = "=" + total;
};
goesInto.addEventListener("mouseenter", onDivisionEnter);

// handles the calculations and display of the answer when mouse enter multiplication symbol
var times = document.getElementById("multiply");
var onMultiplyEnter = function() {
	var total = firstValue * secondValue;
	result.textContent = "=" + total;
};
times.addEventListener("mouseenter", onMultiplyEnter);


var firstValue = document.getElementById("test1");
function applyFirstValue() {
	var entered = document.getElementById("firstNumber").value;
	firstValue.textContent = entered;
};

var secondValue = document.getElementById("test2");
function applySecondValue() {
	var entered = document.getElementById("secondNumber").value;
	secondValue.textContent = entered;
};
