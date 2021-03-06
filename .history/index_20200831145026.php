<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta name="description" content="Paikuse Kiviaja Õpperaja App Veebis">
	  <meta name="keywords" content="robust, app, featuring, javascript, libraries">
	  <meta name="author" content="While I wrote together this app, it was only possible thanks to all the creators of the used javascript-libraries and tutorials. -HD.">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Robust app featuring JavaScript, JS libraries, PHP, SQL etc.</title>
	<link rel="stylesheet" href="./style.css" />
	<link rel="stylesheet" href="./geogame.css" />
	<link rel="stylesheet" href="./toggle-switch.css" />
	<link rel="stylesheet" href="./patternLock.css" />
	<script type="text/javascript" src="./jquery.min.js"></script>
	<script type="text/javascript" src="./jquery-ui.min.js"></script>
	<script type="text/javascript" src="./jquery.ui.touch-punch.min.js"></script>
	<script type="text/javascript" src="./hammer.js"></script>
	<script type="text/javascript" src="./patternLock.min.js"></script>
	<script type="text/javascript" src="./index.js"></script>
	<script type="text/javascript" src="./initial.js"></script>
	<script type="text/javascript" src="./geogame.js"></script>
	<script type="text/javascript" src="./getuser.js"></script>
</head>
<body>
<div class="main" id="main-id">

	<div class="sidebar">
		<div class="sidebar-row-1">
			<p class="sidebar-text">Switch to light mode: </p>
			<label class="switch">
				<input type="checkbox" id="my-check" onclick="switchViewMode()">
				<span class="slider"></span>
			</label>
		</div>
	</div>
	<div class="sidebar-blur" onclick="mobileNavCollapse()"></div>


	<div id="view-wrap-id" class="view-wrap">
		<div id="view__start" class="view" onclick="toMap()" >
			<div class="mobile-nav" onclick="mobileNavExpand()"></div>
			<div>
				<h1 class="intro-title">CLICK TO START</h1>
			</div>
		</div>

		<!-- Navigation view -->
		<div id="view__map" class="view">
			<h1 class="title">MYSTERY</h1>
			<div class="mobile-nav" onclick="mobileNavExpand()"></div>
			<div class="container-nav">
				<div class="card__quiz" onclick="toQuiz1()">
					<p class="map-number">1</p>
				</div>
				<div class="card__quiz" onclick="toQuiz2()">
					<p class="map-number">2</p>
				</div>
				<div class="card__quiz" onclick="toQuiz3()">
					<p class="map-number">3</p>
				</div>
				<div class="card__quiz" onclick="toQuiz4()">
					<p class="map-number">4</p>
				</div>
				<button class="button-footer" id="button-footer-2" onclick="toAward()" disabled>AWARD
				</button>
			</div>
		</div>
		
		
		<!-- Quiz 1 view, patternlock -->
		<div id="view__quiz-1" class="view">
			<h1 class="title">CONNECT IN ORDER</h1>
			<div class="invert" 
				style="
					display: none;
					width: 100%;
					height: 100%;
					pointer-events: none;
					position: absolute;
					pointer-events: none;
					z-index: 999;
					backdrop-filter: invert(100%);
					-webkit-backdrop-filter: invert(100%);
					"
			>
			</div>
			<div id="wrap">
				<div id="layer-1-wrap">
					<div id="layer-1">
						<div id="layer-1-icon-id-1"></div>
						<div id="layer-1-icon-id-2"></div>
						<div id="layer-1-icon-id-3"></div>
						<div id="layer-1-icon-id-4"></div>
					</div>
					<div id="patternHolder" ></div>
				</div>	
				<div class="layer-2-wrap">
					<div class="layer-2" id="1"><img class="layer-2-icon" src="./img/icons/icon-1.png"/></div>
					<div class="layer-2" id="2"><img class="layer-2-icon" src="./img/icons/icon-2.png"/></div>
					<div class="layer-2" id="3"><img class="layer-2-icon" src="./img/icons/icon-3.png"/></div>
					<div class="layer-2" id="4"><img class="layer-2-icon" src="./img/icons/icon-4.png"/></div>
				</div>
			</div>
			<?php include('backButton.php'); ?>
		</div>


		<!-- Quiz 2 view, database query -->
		<div id="view__quiz-2" class="view">
			<h1 class="title">DISPLAY DATA</h1>
			<div class="content-wrap">
				<div class="container-flex__db">
					<form>
					<select name="users" onchange="showUser(this.value)">
						<option value="">Select a person:</option>
						<option value="1">Joosep</option>
						<option value="2">Helina</option>
						<option value="3">Maria</option>
						<option value="4">Toomas</option>
					</select>
					</form>
				</div>
				<br>
				<div id="txtHint"><p>Person info will be listed here...</p></div>	
			</div>
			<?php include('backButton.php'); ?>
		</div>
		

		<!-- Quiz 3 view, draggable, game -->
		<div id="view__quiz-3" class="view">
			<h1 class="title">WHAT IS THIS?</h1>
			<div class="container">
				<div>
					<h1 class="rotated-text">Drag matching shape to the middle</h1>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-1">
						<div id="drag-id-1" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
							<img class="quiz-svg-2" src="./img/icons/icon-1-b.svg" />
						</div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-2">
						<div id="drag-id-2" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-2.svg" />
							<img class="quiz-svg-2" src="./img/icons/icon-2-b.svg" />
						</div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-3">
						<div id="drag-id-3" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
							<img class="quiz-svg-2" src="./img/icons/icon-1-b.svg" />
						</div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-4">
						<div id="drag-id-4" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
							<img class="quiz-svg-2" src="./img/icons/icon-1-b.svg" />
						</div>
					</div>
					<div id="drop1" class="ui-widget-header">
					</div>
					<div id="drop2" class="ui-widget-header">
					</div>
					<div id="drop3" class="ui-widget-header">
					</div>
					<div id="drop4" class="ui-widget-header">
					<div id="answer-box-id" class="answer-box"></div>
					</div>
				</div>
				<?php include('backButton.php'); ?>
			</div>
		</div>


		<!-- Quiz 4 view, LocalStorage math quiz -->
		<div id="view__quiz-4" class="view">
			<div>
				<h1 class="title">MATH QUIZ</h1>
				<div class="content-wrap">
					<div class="content-flex">
						<p class="math">1 + 1 = </p>
						<input type="text" name="math-answer-input" id="math-answer-input" placeholder="_">
					</div>
					<button class="button-footer" id="math-quiz-btn" onclick="checkForm();">CHECK ANSWER</button>
				</div>
			</div>
			<?php include('backButton.php'); ?>
		</div>


		<!-- Award -->
		<div id="view__award" class="view">
			<h1 class="intro-title">SUCCESS!</h1>
			<?php include('backButton.php'); ?>
		</div>


		<div class="view" id="yes" style="background:rgba(110,177,0,.7);display:none;"></div>
		<div class="view" id="no" style="background:rgba(224,46,0,.7);display:none;"></div>
    </div>
</div>
</body> 
	<script type="text/javascript" src="./creating-patternlock.js"></script>
</html>