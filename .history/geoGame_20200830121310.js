
// BIRDGAME


function noop2() {};
function geoGameAddToGoal() {
   geoGameAddToGoal = noop2;   
   awardKey ++;
   Check2();
   $('#yes').show();
      setTimeout(function () {
         $('#yes').hide();
      },1000); 
};

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
        geoGameAddToGoal();
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


