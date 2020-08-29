// -- Creating PatternLock  -- //
	
	
var lock;
function PatternlockGame() {

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