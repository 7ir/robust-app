<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta name="description" content="Paikuse Kiviaja Õpperaja App Veebis">
	  <meta name="keywords" content="kiviaeg,õpperada,rada,app,mäng,nuti,giid,õuesõpe,interaktiivne,õppeprogramm,programm,stone age,trail,path,learning,program,guide,interactive,game,yard">
	  <meta name="author" content="While I wrote together this app, it was only possible thanks to all the creators of the used javascript-libraries and tutorials. -HD.">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kiviaja Õpperaja Rakendus</title>
	<link rel="stylesheet" href="./style.css" />
	<link rel="stylesheet" href="./quiz-1.css" />
	<link rel="stylesheet" href="./toggle-switch.css" />
	<link rel="stylesheet" href="./patternLock.css" />
	<script type="text/javascript" src="./jquery.min.js"></script>
	<script type="text/javascript" src="./jquery-ui.min.js"></script>
	<script type="text/javascript" src="./jquery.ui.touch-punch.min.js"></script>
	<script type="text/javascript" src="./hammer.js"></script>
	<script type="text/javascript" src="./patternLock.min.js"></script>
	<script type="text/javascript" src="./index.js"></script>
	<script type="text/javascript" src="./initial.js"></script>
	<script type="text/javascript" src="./quiz-1.js"></script>
	<script type="text/javascript" src="./getuser.js"></script>
	<script type="text/javascript" src="./creating-patternlock.js"></script>

	<!-- Bootstrap 4
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
 	-->
</head>
<body>
<div class="main">
	<div class="sidebar">
		<div class="sidebar-row-1">
			<!-- <div class="sidebar-row-1-wrap"> -->
				<p class="sidebar-text">Toggle view mode: </p>
				<label class="switch">
					<input type="checkbox" id="my-check" onclick="switchViewMode()">
					<span class="slider"></span>
				</label>
			<!-- </div> -->
		</div>
	</div>
	<div id="view-wrap-id" class="view-wrap">
        <div id="view__start" class="view" onclick="toMap()" >
			<div class="card">
				<div class="card-body">
					<h1 class="title__start">Click to start</h1>
				</div>
			</div>
        </div>

		<!-- Navigation view -->
		<div id="view__map" class="view">
            <div class="container">
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
				<div class="card__award" onclick="toAward()">
					<p class="map-award">Award</p>
				</div>
			</div>
		</div>
		

		<!-- Quiz 1 view, database query -->
		<div id="view__quiz-1" class="view">
			<form>
			<select name="users" onchange="showUser(this.value)">
				<option value="">Select a person:</option>
				<option value="1">Joosep</option>
				<option value="2">Helina</option>
				<option value="3">Maria</option>
				<option value="4">Toomas</option>
			</select>
			</form>
			<br>
			<div id="txtHint"><b>Person info will be listed here...</b></div>
			<?php include('backButton.php'); ?>
		</div>
		

		<!-- Quiz 2 view, draggable, game -->
		<div id="view__quiz-2" class="view">
            <div class="container">
				<div class = "wrap" >
					<h1 class="title">Drag to connect</h1>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-1">
						 <div id="drag-id-1" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
						 </div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-2">
						<div id="drag-id-2" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-2.svg" />
						</div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-3">
						<div id="drag-id-3" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
						</div>
					</div>
					<div class="ui-widget-content ui-drag drag-car" id="drag-car-id-4">
						<div id="drag-id-4" class="ui-widget-content drag">
							<img class="quiz-svg" src="./img/icons/icon-1.svg" />
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


		<!-- Quiz 3 view, LocalStorage math quiz/test -->
		<div id="view__quiz-3" class="view">
			<div class="">

					<input type="text" name="agent" id="agent">
					<button class="" onclick="checkForm();">BUTTON</button>

			</div>
			<?php include('backButton.php'); ?>
		</div>

		
		<!-- Quiz 4 view, patternlock -->
		<div id="view__quiz-4" class="view">
			<div class="main-wrap">
				<!-- <div id="mmaa" class="mma"> -->
				<div>
					<div id="mm1" class="mmb"></div>
					<div id="mm2" class="mmb"></div>
					<div id="mm3" class="mmb"></div>
					<div id="mm4" class="mmb"></div>
				</div>
				<div id="patternHolder" ></div>
			</div>	
			<div>
				<div class="symbol" id="1"><img class="mmIcon" src="./img/icons/icon-1.png"/></div><!-- 
				<div class="symbol" id="2"><img class="mmIcon" src="./img/icons/icon-1.png"/></div>
				<div class="symbol" id="3"><img class="mmIcon" src="./img/icons/icon-1.png"/></div>
				<div class="symbol" id="4"><img class="mmIcon" src="./img/icons/icon-1.png"/></div> -->
			</div>
			<?php include('backButton.php'); ?>
		</div>

		<!-- Award -->
		<div id="view__award" class="view">
            
			<?php include('backButton.php'); ?>
		</div>

		
		<div class="view" id="yes" style="background:rgba( 110, 177, 0, 0.98);display:none;">	
		</div>
		<div class="view" id="no" style="background:rgba(224,46,0,0.95);display:none;">
		</div>
    </div>
</div>
</body> 
</html>