
var lock;

/* var id;
$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
});

function doneResizing(){
  console.log('done resizing');
  KillPatternLock();
} */

/* function myFunction(xx) {
	if (xx.matches) { // If media query matches
		console.log('ewfdd');
	} else {
		KillPatternLock();
		setTimeout(function () {
			PatternlockGame();
		},2000);
	}
} */


// -- Creating PatternLock  -- //
	
	
/* const heightOutput = document.querySelector('#height'); */
/* const widthOutput = document.querySelector('.main'); */

/* function reportWindowSize() {
/*   heightOutput.textContent = window.innerHeight; */
  /* widthOutput.textContent = window.innerWidth; */
/*   console.log('Something is happening - f:reportWindowSize');
  var executed = false; */
   /*  return function() {
        if (!executed) {
            executed = true;
			console.log('Something is happening 2 - f:reportWindowSize');
			// do something
			KillPatternLock();
			setTimeout(function () {
				executed = false;
			},2000);
        }
	}; */

	
	/* function once() {
		var executed = false;
		if (!executed) {
			executed = true;
			// do something
			console.log('Something is happening 2 - f:reportWindowSize');
			KillPatternLock();
			setTimeout(function () {
				executed = false;
			},5000);
		}
	};
	once();  */
/* } */

/* function myFunc(){
	myFunc = function(){}; // kill it as soon as it was called
	console.log('call once and never again!'); // your stuff here
}; */

/* $(window).resize(function() {
    // do something here
	console.log('call once and never again!'); // your stuff here
}); */
/* 
window.onresize = myFunc; */





/* var width = window.innerWidth;

if (width = 940)  {
    KillPatternLock();
} */


/* 
var xx = window.matchMedia("(min-width: 940px)")
myFunction(xx) // Call listener function at run time
xx.addListener(myFunction) // Attach listener function on state changes
 */





/* innerWidth.addEventListener("resize", something);

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
			// do something
			KillPatternLock();
			console.log('Resize');
			setTimeout(function () {
				executed = false;
			},2000);
        }
    };
})();
 */
// Test this if needed for resize:
/* 
 */


/* var prots = document.getElementById('layer-1').offsetWidth / 10; */

function PatternlockGame() {

	var arr = ['1', '2', '3', '4'];
	shuffle(arr);
	var prots = document.getElementById('wrap').offsetWidth / 10;
	var kood = arr.join("");
	lock = PatternLock('#patternHolder', {matrix:[2,2], radius:prots, margin:prots});

	lock.checkForPattern(kood,function(){
		// Right pattern
		console.log('Right pattern!')
	},function(){
		// Wrong pattern
		console.log('Wrong pattern!')
		lock.reset();		
	});

	$( '#layer-1-icon-id-' + arr[0] ).append( $('#1') );
	$( '#layer-1-icon-id-' + arr[1] ).append( $('#2') );
	$( '#layer-1-icon-id-' + arr[2] ).append( $('#3') );
	$( '#layer-1-icon-id-' + arr[3] ).append( $('#4') );

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


/* 
function KillPatternLock() {
	document.getElementById('wrap-1').style.display="none";
	document.getElementById('patternHolder').style.display="none";
	lock = null;
	kood = null;
	arr = null;
	console.log('killedpatternlock');
	console.log('window resize deletes this game');
	console.log(lock);
	console.log(kood);
	console.log(arr);
	setTimeout(function () {
		PatternlockGame();
		console.log('new patternlock should come up');
	},3000);
} */