
// BIRDGAME



function myFunction1() {
   var key1 = false;
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
  /* 
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
  });*/
});

/* function Check() {
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
} */

/* This is for quiz 1 OR 2
    function Check2() {
    if (usesInterview2 ===  2){
    // variable is equal to 4	
    $('#asu9').show();
    }
} */





