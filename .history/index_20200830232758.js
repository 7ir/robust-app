
// Goal: 4
var awardKey = 0;


/* // Create stylesheet
var style = document.createElement('style');
style.innerHTML =
	'table, th, td {' +
		'color: whitesmoke;' +
		'border: 1px solid whitesmoke;' +
        'padding: 5px;' +
    '}';
    
	'table {' +
		'color: whitesmoke;' +
		'border: 1px solid whitesmoke;' +
        'padding: 5px;' +
	'}';
// Get the first script tag
var ref = document.querySelector('script'); */


function switchViewMode() {
    var checkBox = document.getElementById("my-check");
    if (checkBox.checked == true){
        console.log('switched to mobile view')
        document.getElementById("main-id").style.background = "white";



        p {
            color:whitesmoke;
            text-align: center;
        }
        .p {
            padding: 0px 0px 20px 0px;
            position: relative;
            background:#000;
            font-weight: lighter;
            font-size: 1rem;
        }
        .rotated-text {
            position: absolute;
            background:#000;
            padding: 2%;
            color: #888;
            font-weight: lighter;
            font-size: 0.5rem;
            top:20%;
            left: 80%;
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
        }.title {
            padding: 20px;
            position: relative;
            background:#000;
            color: whitesmoke;
            text-transform: uppercase;
            font-weight: bolder;
            font-size: 2rem;
            text-align: center;
        }.intro-title {
            height: 100%;
            width: 100%;
            top: 48%;
            position: absolute;
            color: whitesmoke;
            text-transform: uppercase;
            font-weight: bolder;
            font-size: 2rem;
            text-align: center;
        }.sidebar {
            position: absolute;
            width: 300px;
            height: 100%;
            background: #555;
            z-index: 999;
            box-shadow: 0px 0px 50px #222;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;	
        }.sidebar-row-1 {
            height: 54px;
            width: 100%;
            background:#666;
            box-shadow: 0px -10px 20px #111;
        }.sidebar-text {
            margin: 0;
            width: 160px;
            text-align: left;
            float: left;  
            vertical-align: baseline;
            color: white;
            margin: 18px;
            font-size: 16px;
            font-weight: lighter;
            pointer-events: none;
        }#view__start {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            background: #222;
        }.view {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 900;
            background-size: 100% 100%;
            background: #222;
        }.footer-fixed-btn {
            position: absolute;
            top: 90vh;
            height: 10vh;
            width: 100%;
            z-index: 999;
            background: #333;
            box-shadow: 0px 10px 20px #111;
        }
        .button-footer {
            margin: 2%;
            width: 96%;
            height: 6vh;
            background: #000;
            border: none;
            color: whitesmoke;
            border-radius: 50px;
            font-size: 1rem;
        }#button-footer-2 {
            float: left;
            width: 96%;
            margin: 2% 0 0 2%;
            height: 100px;
            position: relative;
            background: #000;
            border-radius: 20vh;
        }


    } else {
        console.log('switched to desktop view')
        document.getElementById("main-id").style.background = "#111";
    }
};


function toMap() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__map").style.display = "block";
}


function toQuiz1() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-1").style.display = "block";
    patternLockAddToGoal(); // Calls patternlockGame only once //
}
function noop() {};
function patternLockAddToGoal() {
    patternLockAddToGoal = noop;
    patternlockGame();
    console.log('patternLockAddToGoal');
}






function toQuiz2() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-2").style.display = "block";
}


function toQuiz3() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-3").style.display = "block";
}



function toQuiz4() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-4").style.display = "block";
}

function checkForm() {
    var agent = document.getElementById('math-answer-input').value;
    var myArray = ['2'];
    if(myArray.indexOf(agent) == -1) //returns the index of the selected element 
    {
		document.getElementById('no').style.display = "block";
		setTimeout(function () {
    		document.getElementById('no').style.display = "none";
		},1000);
    } else {
        
        awardKey ++;
        Check2();
        $('#yes').show();
        setTimeout(function () {
            $('#yes').hide();
        },1000);
        document.getElementById('math-answer-input').disabled = true;
        document.getElementById('math-quiz-btn').disabled = true;
	}
}

function Check2() {
    console.log('The awardkey equals = ');
    console.log(awardKey);
	if (awardKey ===  4){
    // variable is equal to 4
    document.getElementById("button-footer-2").disabled = false;
	}
}





function toAward() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__award").style.display = "block";
}