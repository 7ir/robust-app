// Self executing (timed: 100ms) function here
setTimeout(function(){ 
    (function() {
        // Your page initialization code here
        // The DOM will be available here
        document.getElementById("view__start").style.display = 'block';
        console.log( "ready!" );
    })();
 }, 100);

