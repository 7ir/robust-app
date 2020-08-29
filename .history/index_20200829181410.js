
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

    console.log("quiz 1")
}


function toQuiz2() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-2").style.display = "block";

    console.log("quiz 2")
}



/* function toQuiz3() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-2").style.display = "block";

    console.log("quiz 2")
}




function toQuiz4() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-2").style.display = "block";

    console.log("quiz 2")
}


function toAward() {
    var x = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    }
    document.getElementById("view__quiz-2").style.display = "block";

    console.log("quiz 2")
} */




// Create stylesheet
var style = document.createElement('style');
style.innerHTML =
	'table, th, td {' +
		'color: whitesmoke;' +
		'border-color: whitesmoke;' +
		'padding: 5px;' +
	'}';

// Get the first script tag
var ref = document.querySelector('script');

