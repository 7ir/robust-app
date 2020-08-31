
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
        document.getElementById("main-id").style.background = "whitesmoke";

        document.querySelectorAll('p').forEach(el => {
            el.style.color = "black";
        })

        document.querySelectorAll('h1.title').forEach(el => {
            el.style.color = "black";
            el.style.background = "white";
        })
        document.querySelectorAll('.intro-title').forEach(el => {
            el.style.color = "black";
            el.style.background = "white";
        }) 
        document.querySelectorAll('.view').forEach(el => {
            el.style.background = "#e0e0e0";
        })   

        
        document.querySelectorAll('#view__quiz-1').forEach(el => {
            el.style.background = "#222";
        })   
 



         document.querySelectorAll('.sidebar').forEach(el => {
            el.style.background = "lightgray";
            el.style.boxShadow = "0px 0px 0px lightgray";
        })
        document.querySelectorAll('.sidebar-row-1').forEach(el => {
            el.style.background = "#b8b8b8";
            el.style.boxShadow = "-12px -10px 20px gray";
        })
        document.querySelectorAll('.sidebar-text').forEach(el => {
            el.style.fontWeight = "normal";
            el.style.color = "#333";
        }) 

        document.querySelectorAll('.footer-fixed-btn').forEach(el => {
            el.style.background = "#b8b8b8";
            el.style.boxShadow = "0px 0px 20px lightgray";
        })  
        document.querySelectorAll('.button-footer').forEach(el => {
            el.style.background = "white";
            el.style.color = "black";
            el.style.fontWeight = "bold";
        })
        document.querySelectorAll('.button-footer-2').forEach(el => {
            el.style.background = "white";
            el.style.color = "#222";
        })
        document.querySelectorAll('.button-footer-2:disabled').forEach(el => {
            el.style.background = "whitesmoke";
            el.style.color = "lightgray";
        })

        document.querySelectorAll('.card__quiz').forEach(el => {
            el.style.background = "white";
        }) 
        document.querySelectorAll('.map-number ').forEach(el => {
            el.style.color = "black";
        })

        document.querySelectorAll('#yes').forEach(el => {
            el.style.background = "rgba( 110, 177, 0, 0.7)";
        })
        document.querySelectorAll('#no').forEach(el => {
            el.style.background = "rgba(224,46,0,0.7)";
        })


        document.querySelectorAll('.math').forEach(el => {
            el.style.color = "black";
            el.style.background = "white";
            el.style.fontWeight = "bold";
        })
        document.querySelectorAll('#math-answer-input').forEach(el => {
            el.style.background = "black";
            el.style.color = "white";
        })     
        document.querySelectorAll('#math-answer-input:disabled').forEach(el => {
            el.style.color = "whitesmoke";
            el.style.background = "#444";
        })
        document.querySelectorAll('#math-quiz-btn').forEach(el => {
            el.style.color = "white";
            el.style.background = "black";
        })  
        document.querySelectorAll('#math-quiz-btn:disabled').forEach(el => {
            el.style.color = "#b8b8b8";
            el.style.background = "#444";
            el.style.fontWeight = "normal";
        })

        document.querySelectorAll('#drop4').forEach(el => {
            el.style.background = "gray";
        })

        document.querySelectorAll('.rotated-text').forEach(el => {
            el.style.background = "white";
        })     
        
        document.querySelectorAll('.quiz-svg').forEach(el => {
            el.style.display = "none";
        }) 
        document.querySelectorAll('.quiz-svg-2').forEach(el => {
            el.style.display = "block";
        })

        document.querySelectorAll('.invert').forEach(el => {
            el.style.display = "block";
        })

        document.querySelectorAll('table, td, th').forEach(el => {
            el.style.color = "white";
            el.style.fontWeight = "lighter";
        })
        document.querySelectorAll('table').forEach(el => {
            el.style.background = "#222";
        })
        document.querySelectorAll('.tr-1').forEach(el => {
            el.style.background = "#333";
        })




        
    } else {
        console.log('dark mode')





        document.getElementById("main-id").style.background = "#111";

        document.querySelectorAll('p').forEach(el => {
            el.style.color = "lightgray";
        })

        document.querySelectorAll('h1.title').forEach(el => {
            el.style.color = "Whitesmoke";
            el.style.background = "#000";
        })
        document.querySelectorAll('.intro-title').forEach(el => {
            el.style.color = "whitesmoke";
            el.style.background = "#000";
        }) 
        document.querySelectorAll('.view').forEach(el => {
            el.style.background = "#222";
        })   







        document.querySelectorAll('.sidebar').forEach(el => {
            el.style.background = "#555";
            el.style.boxShadow = "0px 0px 0px #222";
        })
        document.querySelectorAll('.sidebar-row-1').forEach(el => {
            el.style.background = "#666";
            el.style.boxShadow = "-12px -10px 20px #111";
        })
        document.querySelectorAll('.sidebar-text').forEach(el => {
            el.style.fontWeight = "lighter";
            el.style.color = "white";
        }) 

        document.querySelectorAll('.footer-fixed-btn').forEach(el => {
            el.style.background = "#333";
            el.style.boxShadow = "0px 0px 20px #111";
        })  
        document.querySelectorAll('.button-footer').forEach(el => {
            el.style.background = "#000";
            el.style.color = "whitesmoke";
            el.style.fontWeight = "normal";
        })

        document.querySelectorAll('#button-footer-2').forEach(el => {
            el.style.background = "#000";
            el.style.color = "white";
        })
        document.querySelectorAll('#button-footer-2:disabled').forEach(el => {
            el.style.background = "#222";
            el.style.color = "#999";
        })      


        document.querySelectorAll('.card__quiz').forEach(el => {
            el.style.background = "black";
        }) 
        document.querySelectorAll('.map-number ').forEach(el => {
            el.style.color = "whitesmoke";
        })

        document.querySelectorAll('#yes').forEach(el => {
            el.style.background = "rgba( 110, 177, 0, 0.7)";
        })
        document.querySelectorAll('#no').forEach(el => {
            el.style.background = "rgba(224,46,0,0.7)";
        })


        document.querySelectorAll('.math').forEach(el => {
            el.style.color = "whitesmoke";
            el.style.background = "#000";
            el.style.fontWeight = "normal";
        })
        document.querySelectorAll('#math-answer-input').forEach(el => {
            el.style.background = "whitesmoke";
            el.style.color = "black";
        })     
        document.querySelectorAll('#math-answer-input:disabled').forEach(el => {
            el.style.color = "#222";
            el.style.background = "#gray";
        })
        document.querySelectorAll('#math-quiz-btn').forEach(el => {
            el.style.color = "black";
            el.style.background = "whitesmoke";
        })  
        document.querySelectorAll('#math-quiz-btn:disabled').forEach(el => {
            el.style.color = "#222";
            el.style.background = "#gray";
            el.style.fontWeight = "bold";
        })

        document.querySelectorAll('#drop4').forEach(el => {
            el.style.background = "gray";
        })

        document.querySelectorAll('.rotated-text').forEach(el => {
            el.style.background = "000";
        })     
        


        document.querySelectorAll('.quiz-svg').forEach(el => {
            el.style.display = "block";
        }) 
        document.querySelectorAll('.quiz-svg-2').forEach(el => {
            el.style.display = "none";
        }) 

        document.querySelectorAll('.invert').forEach(el => {
            el.style.display = "none";
        })


        document.querySelectorAll('table, td, th').forEach(el => {
            el.style.color = "#222";
            el.style.fontWeight = "normal";
        })
        document.querySelectorAll('table').forEach(el => {
            el.style.background = "whitesmoke";
        })
        document.querySelectorAll('.tr-1').forEach(el => {
            el.style.background = "#f0f0f0";
        })


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


/* 
    //adding here the qoureselector for black mode
    document.querySelectorAll('.layer-2-b').forEach(el => {
        el.style.display = "none";
    }) 
 */

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