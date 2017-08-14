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

		<!-- JavaScript file -->
		<script type="text/javascript" src="js/script.js"></script>

		<title>spocktocat javascript assignment</title>
	</head>
	<body>
		<div class="container">
			<header>
				<p>Enter values then mouse over a green operation symbol for an answer.</p>
			</header>

			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-2">
					<br/>
					<br/>
					<br/>
					<br/>
					<input id="firstNumber" type="number"/>
				</div>
				<div class="col-md-2 operations">
					<h1 id="add" onmouseenter="onOperationEnter("+");">+</h1>
					<h1 id="subtract" onmouseenter="onMinusEnter();">-</h1>
					<h1 id="divide" onmouseenter="onDivisionEnter();">/</h1>
					<h1 id="multiply" onmouseenter="onMultiplyEnter();">*</h1>
				</div>
				<div class="col-md-2">
					<br/>
					<br/>
					<br/>
					<br/>
					<input id="secondNumber" type="number"/>
				</div>
				<div class="col-md-3">
					<br/>
					<br/>
					<br/>
					<br/>
					<h1 id="answer">= ?</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<button type="submit" id="yummy" class="center-block">
						<img src="https://baconmockup.com/200/200" class="img-responsive center-block" alt="yummy">Click for
						yummy goodness
					</button>
				</div>
				<div class="col-md-8">
					<p id="yummyText"></p>
				</div>
			</div>
		</div>
	</body>
</html>

