<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="author" content="Marty Bonacci">
		<meta name="description" content="spocktocat javascript assignment">

		<meta http-equiv
		"X-UA-Compatible" content="IE=edge"> <!-- needed for Internet Explorer's rendering engine  -->
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
				integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Font Awesome -->
		<link type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css"
				rel="stylesheet">

		<!-- Custom CSS Goes Here -->

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>


		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
				  integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
				  crossorigin="anonymous"></script>


		<!-- custom CSS stylesheet -->
		<link rel="stylesheet" href="css/style.css" type="text/css"/>

		<title>spocktocat javascript assignment</title>
	</head>
	<body>
		<header>
			<p>Mouse over a green operation symbol for an answer.</p>
		</header>

		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-2">
				<br/>
				<br/>
				<br/>
				<br/>
				<h1 id="firstNumber">7</h1>
			</div>
			<div class="col-md-2 operations">
				<h1 id="add">+</h1>
				<h1 id="subtract">-</h1>
				<h1 id="divide">/</h1>
				<h1 id="multiply">*</h1>
			</div>
			<div class="col-md-2">
				<br/>
				<br/>
				<br/>
				<br/>
				<h1 id="secondNumber">5</h1>
			</div>
			<div class="col-md-3">
				<br/>
				<br/>
				<br/>
				<br/>
				<h1 id="answer">=   ?</h1>
			</div>
		</div>


		<script>

// changes the value of the first number displayed
			var valueOne = document.getElementById("firstNumber")
			valueOne.textContent = 6;
// changes the value of the second number displayed
			var valueTwo = document.getElementById("secondNumber")
			valueTwo.textContent = 9;

// changes the value of the answer displayed
			var result = document.getElementById("answer");


// handles the calculations and display of the answer when mouse enter addition symbol
			var plus = document.getElementById("add");
			var onImageEnter = function () {
				var total = valueOne + valueTwo;
				result.textContent = "=" + total;
			};
			plus.addEventListener("mouseenter",onImageEnter);


// handles the calculations and display of the answer when mouse enter take away symbol
			var takeAway = document.getElementById("subtract");
			var onImageEnter = function () {
				result.textContent = "=7-5";
			};
			takeAway.addEventListener("mouseenter",onImageEnter);


// handles the calculations and display of the answer when mouse enter guzinto symbol
			var goesInto = document.getElementById("divide");
			var onImageEnter = function () {
				result.textContent = "=7/5";
			};
			goesInto.addEventListener("mouseenter",onImageEnter);

// handles the calculations and display of the answer when mouse enter multiplication symbol
			var times = document.getElementById("multiply");
			var onImageEnter = function () {
				result.textContent = "=7*5";
			};
			times.addEventListener("mouseenter",onImageEnter);

		</script>


	</body>
</html>

