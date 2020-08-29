
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
    /*var checkBox = document.getElementById("toggle-switch");*/
    var checkBox = document.getElementById("my-check");
    
    /* var text = document.getElementById("text"); */
    if (checkBox.checked == true){
        console.log('switched to mobile view')
        document.getElementById("view-wrap-id").style.width = '63vh';
    } else {
        console.log('switched to desktop view')
        document.getElementById("view-wrap-id").style.width = '93vh';
    }
};


function toMap() {
    // This is the same as  'document.getElementsByClassName("view").display = "none";'  with and addition of making sure to get all 'view'-s
    /* var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    } */

   /*  document.getElementsByClassName("view").display = "none"; */

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

var voti1 = true;
function checkForm() {
    var agent1 = document.getElementById('agent1').value;
    var myArray1 = ['lõug', 'lõualuu', 'luu', 'loualuu', 'haugi lõualuu','kont','hambad','hammas','cheekbone','bone','teeth','cheek','pike mandible','mandible','pike','Lõug', 'Lõualuu', 'Haugi lõualuu', 'Luu','Kont','Hambad','Hammas','Cheekbone','Bone','Teeth','Cheek','Pike mandible','Mandible','Pike'];
    if(myArray1.indexOf(agent1) == -1) //returns the index of the selected element 
    {
		$('#no').show();
		setTimeout(function () {
			$('#no').hide();
		},1000);
       /*return false;*/ // if you return false then you don't have to write the else statement
    } else {
		if(voti1){
            console.log('right');
		voti1=false;
		usesInterview2 ++;
		  Check2();
        /*return true;*/
        
		$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
		},1000);
		}
	}
}

var usesInterview2 = 0;
function Check2() {
	if (usesInterview2 ===  1){
    // variable is equal to 4
    console.log(usesInterview2);
	}
}



function toQuiz4() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-4").style.display = "block";
}


function toAward() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__award").style.display = "block";
}