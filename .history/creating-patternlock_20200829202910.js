// -- Creating PatternLock  -- //
	
	




var lock;
function PatternlockGame() {

	var arr = ['1', '2', '3', '4'];
	shuffle(arr);
	var prots = document.getElementById('layer-1').offsetWidth / 10;
	var kood = arr.join("");
	lock = new PatternLock('#patternHolder', {matrix:[2,2], enableSetPattern : true, radius:prots, margin:prots});

	lock.checkForPattern(kood,function(){
		Diplom();	
		document.getElementById("asu9").style.backgroundColor = "#363600";
	},function(){
		console.log('Wrong pattern!')
		lock.reset();		
	});

	$( '#pl-id-' + arr[0] ).append( $('#1') );
	$( '#pl-id-' + arr[1] ).append( $('#2') );
	$( '#pl-id-' + arr[2] ).append( $('#3') );
	$( '#pl-id-' + arr[3] ).append( $('#4') );

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