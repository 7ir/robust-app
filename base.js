

	var flag0 = true;
	var flag1 = true;
	var flag2 = true;
	var flag3 = true;
	var flag4 = true;
	var flag5 = true;
	var usesInterview = 0;
	var usesInterview2 = 0;

	var voti1 = true;
	var voti2 = true;
	
	var words = [
			'Osav',
			'Võimas',
			'Vägev',
			'Dünaamiline',
			'Suurepärane',
			'Edukas',
			'Suurejooneline',
			'Võitja',
			'Legendaarne',
			'Legend',
			'Õige',
	], i = 0;

	var getRandomWord = function () {
	return words[Math.floor(Math.random() * words.length)];
	};

	

$(document).ready(function() {
	/*document.getElementById("ring0start").style.animationPlayState ="paused";*/
	console.log( "ready!" );
	$("#start").show();
	$("#navs").show();
	
	timeout();
	function timeout() {
		setTimeout(function () {
			console.log(usesInterview);
		},1000);
    }
});


 
////GREAT
function Text() {
		$('#textbox1').html('<h1 style="text-align:center;color:black;">Diplom</h1><br>Oled ' + getRandomWord()).show();
};
////GREAT



function Intro0() {
	if(flag0){  
		document.getElementById("vid0").play();
		$("#lugu0").show();
		$("#introMap").hide();
		
		flag0=false; 
	}
	Intro();
	}
function Intro() {
	var vid0 = document.getElementById("vid0");
	$(".lugu").hide();
	$("#lugu0").show();
	
	setTimeout(function () {
		$("#navs").show();
	},1000);
		
	vid0.onplay = function() {
	document.getElementById("asu0").style.backgroundColor = "#363600";
	document.getElementById("ring0").style.animationPlayState ="paused";
	document.getElementById("ring1").style.animationPlayState ="running";
	};
	vid0.onended = function() {
	$(".lugu").hide();
	};
	}
	
	
function Esimene0() {
	if(flag1){  
		document.getElementById("vid1").play();
		flag1=false;
	}Esimene();}
function Esimene() {
	var vid1 = document.getElementById("vid1");
	
	$(".lugu").hide();
	$("#lugu1").show();
		$("#navs").hide();
	document.getElementById("asu1").style.backgroundColor = "#363600";
	document.getElementById("ring1").style.animationPlayState ="paused";
	document.getElementById("ring2").style.animationPlayState ="running";
	
	
	vid1.onplay = function() {
	};
	vid1.onended = function() {
	$(".lugu").hide();
		$("#navs").show();
	};
	}
	
	
	
	
function Lisa1() {
	$('#lisa1').show();
		$("#navs").hide();
	document.getElementById("ring3").style.animationPlayState ="running";
}
	
	
	
function Teine0() {
	if(flag2){  
		document.getElementById("vid2").play();
		flag2=false;  
	}Teine();}
function Teine() {
	var vid2 = document.getElementById("vid2");
	
	$(".lugu").hide();
	$("#lugu2").show();
		$("#navs").hide();
	document.getElementById("asu3").style.backgroundColor = "#363600";
	document.getElementById("ring3").style.animationPlayState ="paused";
	document.getElementById("ring4").style.animationPlayState ="running";
	
	
	vid2.onplay = function() {
	};
	vid2.onended = function() {
	$(".lugu").hide();
		$("#navs").show();
	};
	}
	
	
	

function Linnud() {
	$('#lisa2').show();
		$("#navs").hide();
	document.getElementById("ring5").style.animationPlayState ="running";
}
	/* SLIDESHOW */
function Lisa3() {
	$('#lisa3').show();
		$("#navs").hide();
	document.getElementById("asu5").style.backgroundColor = "#363600";
	document.getElementById("ring5").style.animationPlayState ="paused";
	document.getElementById("ring211").style.animationPlayState ="running";
}


	/*/  quis 1 luu    /*/
function Lisa111() {
	$('#lisa111').show();
		$("#navs").hide
	document.getElementById("ring6").style.animationPlayState ="running";
	document.getElementById("ring9").style.animationPlayState ="running";
}
	
	
	/*/ puud /*/
function Lisa4() {
	$('#lisa4').show();
		$("#navs").hide();
	document.getElementById("ring7").style.animationPlayState ="running";
}


	
function Kolmas0() {
	if(flag3){  
		document.getElementById("vid3").play();
		flag3=false;  
	}Kolmas();}
function Kolmas() {
	var vid3 = document.getElementById("vid3");
	
	$(".lugu").hide();
	$("#lugu3").show();
		$("#navs").hide();
	document.getElementById("asu7").style.backgroundColor = "#363600";
	document.getElementById("ring7").style.animationPlayState ="paused";
	document.getElementById("ring711").style.animationPlayState ="running";
		
	
	vid3.onplay = function() {
	};	
	vid3.onended = function() {
	$(".lugu").hide();
		$("#navs").show();
	};
	}

		
		
	/*/ quiz 2 kamm /*/
function Lisa411() {
	$('#lisa411').show();
		$("#navs").hide();
	document.getElementById("ring8").style.animationPlayState ="running";
}		

	
	
function Neljas0() {
	if(flag4){  
		document.getElementById("vid4").play();
		flag4=false;  
	}Neljas();}
function Neljas() {
	var vid4 = document.getElementById("vid4");
	
	$(".lugu").hide();
	$("#lugu4").show();
		$("#navs").hide();
	document.getElementById("asu8").style.backgroundColor = "#363600";
	document.getElementById("ring8").style.animationPlayState ="paused";
	/*document.getElementById("ring11").style.animationPlayState ="running";*/
	
	vid4.onplay = function() {
	};	
	vid4.onended = function() {
	$(".lugu").hide();
		$("#navs").show();
	};
	}


	
// Logod
function Kuues() {
		/*setTimeout(function w() {
			$("#lugu6").hide();
		},4000);*/

	document.getElementById('RJK').style.animation = "rjk1 18s linear";
	/*document.getElementById('RJK2').style.animation = "rjk1 26s linear";*/
	$(".lugu").hide();
	$("#lugu6").show();
		/*$("#navs").hide();*/
	
	document.getElementById("ring11").style.animationPlayState ="paused";
	document.getElementById("asu11").style.backgroundColor = "#363600";
}
	
	
	
	
	
	// game pushed on map
function Viies0() {
	if(flag5){
		$("#lugu5").show();
		$("#navs").hide();
		MangOnce();
		flag5=false;  
	}Viies();}
function Viies() {
	$(".lugu").hide();
	$("#lugu5").show();
		$("#navs").hide();
		/*ShowTut();*/
	/*document.getElementById("ring10").style.animationPlayState ="running";*/
}



	
// Diploma
function Diplom() {
		document.getElementById("nature").play();
	$(".lugu").hide();
	$("#diplom").show();
		$("#navs").hide();
	document.getElementById("asu10").style.backgroundColor = "#6e8500";
	document.getElementById("ring10").style.animationPlayState ="paused";
	/*document.getElementById("ring11").style.animationPlayState ="running";*/
	
}











// Mangu vaid 1kordne vajutamine //
var MangOnce = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
			Mang();
        }
    };
})();

/*
function ShowTut() {
	var audio = new Audio('./aud/tut.mp3');
	audio.play();
	var myWindow = $('#tut').show();
    ring20.style.animation = "ring20 1s linear forwards;
	var local = lock;
	lock.disable();
	setTimeout(function(){ myWindow.hide(), lock.enable();}, 1000);
}*/

	
	
	
	
	
	
	

	
	// -- Creating PatternLock  -- //
	
	
	var lock;
function Mang() {
	
	var arr = ['1', '2', '3', '4'];
	shuffle(arr);
	var prots = document.getElementById('mmaa').offsetWidth / 10;
	var kood = arr.join("");
	lock = new PatternLock('#patternHolder', {matrix:[2,2], enableSetPattern : true, radius:prots, margin:prots});

	lock.checkForPattern(kood,function(){
		Diplom();
		$('#asu10').show();		
		document.getElementById("asu9").style.backgroundColor = "#363600";
	},function(){
		myFunction2();
		ShowTut();
		lock.reset();		
	});

	$( '#mm' + arr[0] ).append( $('#1') );
	$( '#mm' + arr[1] ).append( $('#2') );
	$( '#mm' + arr[2] ).append( $('#3') );
	$( '#mm' + arr[3] ).append( $('#4') );

	function shuffle(shuffleArray) {
		var currentIndex = shuffleArray.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = shuffleArray[currentIndex];
		shuffleArray[currentIndex] = shuffleArray[randomIndex];
		shuffleArray[randomIndex] = temporaryValue;
		}
		return shuffleArray;
	};

}





// back
function Hide(){
	$('.lugu').hide();
		$("#navs").show();
	$('.vid').each(function() {
		$(this).get(0).pause();
		$(this).get(0).currentTime = 0;
	});
	$('.aud').each(function() {
		$(this).get(0).pause();
	});
};
// back
function Hide2(){
	$('#lugu6').hide();
	$('#diplom').show();
};


// back patternl
function patHide(){
	$('#lugu5').hide();
	$("#navs").show();
};



// vik
function myFunction1() {
	$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000);
	document.getElementById("asu2").style.backgroundColor = "#363600";
	document.getElementById("ring2").style.animationPlayState ="paused";
}
function myFunction111() {
	$('#yes2').show();
		setTimeout(function () {
			$('#yes2').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000);
	document.getElementById("asu211").style.backgroundColor = "#363600";
	document.getElementById("ring211").style.animationPlayState ="paused";
}
function myFunction2() {
	$('#no').show();
		setTimeout(function () {
			$('#no').hide();
		},1000);
}
function myFunction3() {
	$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000);
	document.getElementById("asu6").style.backgroundColor = "#363600";
	document.getElementById("ring6").style.animationPlayState ="paused";
	$('#akenTamm').show();
}
function myFunction311() {
	$('#yes2').show();
		setTimeout(function () {
			$('#yes2').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000);
	document.getElementById("asu711").style.backgroundColor = "#363600";
	document.getElementById("ring711").style.animationPlayState ="paused";
	/*$('#akenTamm2').show();*/
}








// BIRDGAME

 /*  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29418466-1']);
  _gaq.push(['_setDomainName', 'furf.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
   */
  
  
  
$(function() {
	$( "#drag1" ).draggable({ revert: true });
	$( "#drag2" ).draggable({ revert: true });
	$( "#drag3" ).draggable({ revert: true });
	$( "#drag4" ).draggable({ revert: true });
	$( "#drag111" ).draggable({ revert: true });
	$( "#drag211" ).draggable({ revert: true });
	$( "#drag311" ).draggable({ revert: true });
	$( "#drag411" ).draggable({ revert: true });
	$( "#drag5" ).draggable({ revert: true });
	$( "#drag6" ).draggable({ revert: true });
	$( "#drag7" ).draggable({ revert: true });
	$( "#drag8" ).draggable({ revert: true });
	$( "#drag9" ).draggable({ revert: true });
	$( "#drag10" ).draggable({ revert: true });
	$( "#drag11" ).draggable({ revert: true });
	$( "#drag12" ).draggable({ revert: true });
	$( "#drag911" ).draggable({ revert: true });
	$( "#drag1011" ).draggable({ revert: true });
	$( "#drag1111" ).draggable({ revert: true });
	$( "#drag1211" ).draggable({ revert: true });
	
	$( "#drop1" ).droppable({
	   accept: "#drag1",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	   }
	});
	$( "#drop2" ).droppable({
	   accept: "#drag2",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction1();
		$('#akenTarvas').show();
	  }
	});			
	$( "#drop3" ).droppable({
	   accept: "#drag3",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop4" ).droppable({
	   accept: "#drag4",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});	
	
	$( "#drop111" ).droppable({
	   accept: "#drag111",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	   }
	});
	$( "#drop211" ).droppable({
	   accept: "#drag211",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction111();
		$('#akenTarvas2').show();
	  }
	});			
	$( "#drop311" ).droppable({
	   accept: "#drag311",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop411" ).droppable({
	   accept: "#drag411",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});	
	
	
	$( "#drop5" ).droppable({
	   accept: "#drag5",
	   drop: function( event, ui ) {
		  $( this )
		  $('#bhbird5').show();
		  $('#dragc5').hide();
		  usesInterview ++;
		  Check();
	   }
	});
	$( "#drop6" ).droppable({
	   accept: "#drag6",
	   drop: function( event, ui ) {
		  $( this )
		  $('#bhbird6').show();
		  $('#dragc6').hide();
		  usesInterview ++;
		  Check();
	  }
	});			
	$( "#drop7" ).droppable({
	   accept: "#drag7",
	   drop: function( event, ui ) {
		  $( this )
		  $('#bhbird7').show();
		  $('#dragc7').hide();
		  usesInterview ++;
		  Check();
	  }
	});			
	$( "#drop8" ).droppable({
	   accept: "#drag8",
	   drop: function( event, ui ) {
		  $( this )
		  $('#bhbird8').show();
		  $('#dragc8').hide(); 
		  usesInterview ++;
		  Check();
	  }
	});
	
	
	$( "#drop9" ).droppable({
	   accept: "#drag9",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	   }
	});
	$( "#drop10" ).droppable({
	   accept: "#drag10",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop11" ).droppable({
	   accept: "#drag11",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop12" ).droppable({
	   accept: "#drag12",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction3();
	  }
	});
	
		$( "#drop911" ).droppable({
	   accept: "#drag911",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	   }
	});
	$( "#drop1011" ).droppable({
	   accept: "#drag1011",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop1111" ).droppable({
	   accept: "#drag1111",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction2();
	  }
	});			
	$( "#drop1211" ).droppable({
	   accept: "#drag1211",
	   drop: function( event, ui ) {
		  $( this )
		  myFunction311();
	  }
	});
});

function Check() {
	if (usesInterview === 4){
	// variable is equal to 4	
	$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000);
	document.getElementById("asu4").style.backgroundColor = "#363600";
	}
}

function Check2() {
	if (usesInterview2 ===  2){
	// variable is equal to 4	
	$('#asu9').show();
	}
}

function BhouseReset() {
	$('.dragCar').show();
}



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
		document.getElementById("upmid").play();
		myFunction111();
		voti1=false;
		usesInterview2 ++;
		  Check2();
		document.getElementById("ring211").style.animationPlayState ="paused";
		/*return true;*/
		}
	}
}


function checkForm2() {
    var agent2 = document.getElementById('agent2').value;
    var myArray2 = ['keraamilist','kammkeraamiline', 'kammkeraamilisi','kammkeraamika liiki', 'kammkeraamilist liiki','kammkeraamiline liik',  'kammkeraamika', 'kamm','combware','comb ware','ware','comb','Kammkeraamilist','Kammkeraamiline','Kammkeraamika liiki', 'Kammkeraamilist liiki','Kammkeraamiline liik', 'Kammkeraamilisi','Kammkeraamika', 'Kamm','Combware','Comb ware','Ware','Comb'];
    if(myArray2.indexOf(agent2) == -1) //returns the index of the selected element 
    {
		$('#no').show();
		setTimeout(function () {
			$('#no').hide();
		},1000);
        /*return false;*/ // if you return false then you don't have to write the else statement
    } else{
		if(voti2){
		myFunction311();
		document.getElementById("upmid").play();
		voti2=false;
		usesInterview2 ++;
		  Check2();
		document.getElementById("ring711").style.animationPlayState ="paused";
		/*return true;*/
		}
	}
}




