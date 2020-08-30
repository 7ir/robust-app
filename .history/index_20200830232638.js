
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