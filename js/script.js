var firstValue = document.getElementById("firstNumber").value;
var secondValue = document.getElementById("secondNumber").value;

var onKeyUp = function() {

};
firstValue.addEventListener("onkeyup", onKeyUp);

// changes the value of the first number displayed
// 	var firstValue = document.getElementById("firstNumber").value;
//			firstValue = valueOne.textContent;
//valueOne.textContent = firstValue;

// changes the value of the second number displayed parseFloat(
// 	var secondValue = document.getElementById("secondNumber").value;

//secondValue = 9;
//valueTwo.textContent = secondValue;

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