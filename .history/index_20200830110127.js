
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



/* function myFunction(x2) {
    if (x2.matches) { // If media query matches
        document.getElementsByClassName('view-warp').width = "100%";
    } else {
        document.getElementsByClassName('view-warp').width = "63vh";
    }
  };
  
  var x2 = window.matchMedia("(max-width: 940px)");
  myFunction(x2); // Call listener function at run time
  x2.addListener(myFunction); // Attach listener function on state changes */




function switchViewMode() {
    var checkBox = document.getElementById("my-check");

    if (checkBox.checked == true){
        console.log('switched to mobile view')
        document.getElementsByClassName("main").background = "white";
    } else {
        console.log('switched to desktop view')
        document.getElementsByClassName("main").background = "white";
    }
};


function toMap() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__map").style.display = "block";
    console.log("view should go to \'none' and view__map should display")
}


function toQuiz1() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-1").style.display = "block";
    foo(); // Calls patternlockGame only once //
}
function noop() {};
function foo() {
    foo = noop;
    patternlockGame();
    console.log('call');
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
    var agent = document.getElementById('agent').value;
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
        document.getElementById('agent').disabled = true;
        document.getElementById('quiz-4-btn').disabled = true;
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