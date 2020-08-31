
var lock;
function patternlockGame() {

	var key = true;
	var arr = ['1', '2', '3', '4'];
	shuffle(arr);
	var prots = document.getElementById('wrap').offsetWidth / 10;
	var kood = arr.join("");
	lock = new PatternLock('#patternHolder', {matrix:[2,2], radius:prots, margin:prots});

	lock.checkForPattern(kood,function(){
		// Right pattern
		console.log('Right pattern!')
		if(key){
		    key=false;
		    awardKey ++;
            Check2();
		    $('#yes').show();
		    setTimeout(function () {
		    	$('#yes').hide();
		    },1000);
		}
	},function(){
		// Wrong pattern
		console.log('Wrong pattern!')
		lock.reset();	
		$('#no').show();
		setTimeout(function () {
			$('#no').hide();
		},1000);	
	});

	$( '#layer-1-icon-id-' + arr[0] ).append( $('#1') );
	$( '#layer-1-icon-b-id-' + arr[0] ).append( $('#11') );

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

};