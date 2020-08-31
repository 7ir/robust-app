// Self executing (timed: 100ms) function here
setTimeout(function(){ 
    (function() {
        // Your page initialization code here
        // The DOM will be available here
        document.getElementById("view__start").style.display = 'block';
        
        document.querySelectorAll('.quiz-svg').forEach(el => {
            el.style.display = "block";
        }) 
        document.querySelectorAll('.quiz-svg-2').forEach(el => {
            el.style.display = "none";
        })


        console.log( "ready!" );
    })();
 }, 100);

