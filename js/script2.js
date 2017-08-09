

var firstVal=function() {
	// grabs the value of the first number input
	var firstValue = document.getElementById("firstNumber").value;
	result.numberValue= firstValue;
}

var secondVal=function() {
// grabs the value of the second number input
	var secondValue = document.getElementById("secondNumber").value;
	result.numberValue= secondValue;
}

// changes the value of the answer displayed
var result = document.getElementById("answer");

// handles the calculations and display of the answer when mouse enter addition symbol
var plus = document.getElementById("add");
var onPlusEnter = function() {
	var total = firstVal + secondVal;
	result.textContent = "=" + total;
};
plus.addEventListener("mouseenter", onPlusEnter);

// handles the calculations and display of the answer when mouse enter take away symbol
var takeAway = document.getElementById("subtract");
var onMinusEnter = function() {
	var total = firstVal - secondVal;
	result.textContent = "=" + total;
};
takeAway.addEventListener("mouseenter", onMinusEnter);


// handles the calculations and display of the answer when mouse enter guzinto symbol
var goesInto = document.getElementById("divide");
var onDivisionEnter = function() {
	var total = firstVal / secondVal;
	result.textContent = "=" + total;
};
goesInto.addEventListener("mouseenter", onDivisionEnter);

// handles the calculations and display of the answer when mouse enter multiplication symbol
var times = document.getElementById("multiply");
var onMultiplyEnter = function() {
	var total = firstVal * secondVal;
	result.textContent = "=" + total;
};
times.addEventListener("mouseenter", onMultiplyEnter);