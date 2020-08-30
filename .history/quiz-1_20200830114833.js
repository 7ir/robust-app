
// BIRDGAME


var key1 = false;
function myFunction1() {
	$('#yes').show();
		setTimeout(function () {
			$('#yes').hide();
			$('.lugu').hide();
			$('#navs').show();
		},1000); 
	/* document.getElementById("asu2").style.backgroundColor = "#363600";
    document.getElementById("ring2").style.animationPlayState ="paused"; */
    key1 = true;
    console.log(key1)
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
  $( "#drag-id-4" ).draggable({ revert: true });/* 
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
  $( "#drag1211" ).draggable({ revert: true }); */
  
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


