// -- Creating PatternLock  -- //
	
	
/* const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  console.log('Something is happening - f:reportWindowSize');
}

window.onresize = reportWindowSize; */





function myFunction(xx) {
	if (xx.matches) { // If media query matches
		console.log('ewfdd');
		delete window.lock;
		prots = document.getElementById('layer-1').offsetWidth / 10;
	} else {
		console.log('ewf1677678787887d');
		delete window.lock;
		prots = document.getElementById('layer-1').offsetWidth / 10;
	}
}

var xx = window.matchMedia("(min-width: 940px)")
myFunction(xx) // Call listener function at run time
xx.addListener(myFunction) // Attach listener function on state changes



var protsGlobal = "100";

var lock;
function PatternlockGame() {

	var arr = ['1', '2', '3', '4'];
	shuffle(arr);
	var prots = protsGlobal;
	/*var prots = document.getElementById('layer-1').offsetWidth / 10; */
	var kood = arr.join("");
	lock = new PatternLock('#patternHolder', {matrix:[2,2], radius:prots, margin:prots});

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