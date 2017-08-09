
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

function onMultiplyEnter () {
	var result = document.getElementById("answer").value;
//	var total = document.getElementById("testanswer");
	var firstValue = applyFirstValue();
	var secondValue = applySecondValue();
	var total = firstValue * secondValue;
	result.textContent = total;

};




function applyFirstValue() {
	var firstValue = document.getElementById("test1").value;
	var entered = document.getElementById("firstNumber").value;
	firstValue.textContent = entered;
};


function applySecondValue() {
	var secondValue = document.getElementById("test2");
	var entered = document.getElementById("secondNumber").value;
	secondValue.textContent = entered;
};
