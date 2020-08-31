
// Goal: 4
var awardKey = 0;



function mobileNavExpand() {
/*     document.querySelectorAll('.mobile-nav').forEach(el => {
        el.style.display = "none";
    })    */
    document.querySelectorAll('.sidebar').forEach(el => {
        el.style.display = "block";
    })    
    document.querySelectorAll('.sidebar-blur').forEach(el => {
        el.style.display = "block";
    })

    console.log('clicked hamburger');
}



function mobileNavCollapse() {
/*     document.querySelectorAll('.mobile-nav').forEach(el => {
        el.style.display = "block";
    }) */
    document.querySelectorAll('.sidebar').forEach(el => {
        el.style.display = "none";
    })    
    document.querySelectorAll('.sidebar-blur').forEach(el => {
        el.style.display = "none";
    })
    console.log('closed mobilne nav');
}


function switchViewMode() {
    var checkBox = document.getElementById("my-check");
    if (checkBox.checked == true){
        console.log('light mode')
        document.getElementById("main-id").style.background = "white";

        document.querySelector("p").style.color = "black";
        document.getElementById("view__map").style.background = "whitesmoke";
        document.querySelectorAll('h1.title').forEach(el => {
            el.style.color = "black";
            el.style.background = "white";
        })
        document.querySelectorAll('.sidebar').forEach(el => {
            el.style.background = "#efefef";
            el.style.boxShadow = "0px 0px 0px lightgray";
        })
        document.querySelectorAll('.intro-title').forEach(el => {
            el.style.color = "black";
            el.style.background = "white";
        }) 
        document.querySelectorAll('.view').forEach(el => {
            el.style.background = "white";
        })   
        document.querySelectorAll('.sidebar-row-1').forEach(el => {
            el.style.background = "lightgray";
            el.style.boxShadow = "-12px -10px 20px gray";
        })
        document.querySelectorAll('.sidebar-text').forEach(el => {
            el.style.fontWeight = "normal";
        }) 
        document.querySelectorAll('#view__start').forEach(el => {
            el.style.background = "normal";
        })





        /* 
       #view__start {
            background: #222;
        }.view {
            background: #222;
        }.footer-fixed-btn {
            background: #333;
            box-shadow: 0px 10px 20px #111;
        }
        .button-footer {
            background: #000;
            color: whitesmoke;

        }#button-footer-2 {
            background: #000;
        }#button-footer-2:disabled {
            background: #222;
            color: #999;
        }#view__map {
            background: #333;
        }.card__quiz {
            background: #000;
        }
        .map-number {
            color: whitesmoke;
        }.back-btn
            background: #000;
            color:whitesmoke;
        }table, td, th {
            background: whitesmoke;
            color:#222;
        #txtHint
            color: whitesmoke;
        .math 
            background: #000;
            color: whitesmoke;
            
            #math-answer-input
            background: whitesmoke;

        #math-quiz-btn
        color: black;
            background: whitesmoke; */

    } else {
        console.log('dark mode')
        document.getElementById("main-id").style.background = "#111";

        /* p {
            color:whitesmoke;
        }
        .p {
            background:#000;
            font-weight: lighter;
        }
        .rotated-text {
            background:#000;
            color: #888;
            font-weight: lighter;
        }.title {
            background:#000;
            color: whitesmoke;
        }.intro-title {
            color: whitesmoke;´
        }.sidebar {
            background: #555;
            box-shadow: 0px 0px 50px #222;
        }.sidebar-row-1 {
            background:#666;
            box-shadow: 0px -10px 20px #111;
        }.sidebar-text {
            color: white;
            font-weight: lighter;
        }#view__start {
            background: #222;
        }.view {
            background: #222;
        }.footer-fixed-btn {
            background: #333;
            box-shadow: 0px 10px 20px #111;
        }
        .button-footer {
            background: #000;
            color: whitesmoke;

        }#button-footer-2 {
            background: #000;
        }#button-footer-2:disabled {
            background: #222;
            color: #999;
        }#view__map {
            background: #333;
        }.card__quiz {
            background: #000;
        }
        .map-number {
            color: whitesmoke;
        }.back-btn
            background: #000;
            color:whitesmoke;
        }table, td, th {
            background: whitesmoke;
            color:#222;
        #txtHint
            color: whitesmoke;
        .math 
            background: #000;
            color: whitesmoke;
            
            #math-answer-input
            background: whitesmoke;

        #math-quiz-btn
        color: black;
            background: whitesmoke;
 */




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