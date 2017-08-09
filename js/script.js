// changes the value of the answer displayed
var result = document.getElementById("answer");

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




var resultTwo = document.getElementById("first");

var entered = document.getElementById("firstNumber");
var onInput = function() {
	var firstVal = entered;
	resultTwo.textContent = "1stValue" + firstVal;
};
entered.addEventListener("input", onInput);
