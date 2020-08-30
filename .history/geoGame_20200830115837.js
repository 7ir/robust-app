
// BIRDGAME


var key1 = false;
function myFunction1() {
	$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
		},1000); 
	/* document.getElementById("asu2").style.backgroundColor = "#363600";
    document.getElementById("ring2").style.animationPlayState ="paused"; */
   key1 = true;
   console.log(key1)
   function foo() {
      foo = noop;   
      awardKey ++;
      Check2();
   }
   foo()
}
function myFunction2() {
	$('#no').show();
		setTimeout(function () {
			$('#no').hide();
		},1000);
}





$(function() {
  $( "#drag-id-1" ).draggable({ revert: true });
  $( "#drag-id-2" ).draggable({ revert: true });
  $( "#drag-id-3" ).draggable({ revert: true });
  $( "#drag-id-4" ).draggable({ revert: true }); 

  $( "#drop1" ).droppable({
     accept: "#drag-id-1",
     drop: function( event, ui ) {
        $( this )
        myFunction2();
     }
  });
  $( "#drop2" ).droppable({
     accept: "#drag-id-2",
     drop: function( event, ui ) {
        $( this )
        myFunction1();
      $('#answer-box-id').show();
    }
  });			
  $( "#drop3" ).droppable({
     accept: "#drag-id-3",
     drop: function( event, ui ) {
        $( this )
        myFunction2();
    }
  });
  $( "#drop4" ).droppable({
     accept: "#drag-id-4",
     drop: function( event, ui ) {
        $( this )
        myFunction2();
    }
  });
});


