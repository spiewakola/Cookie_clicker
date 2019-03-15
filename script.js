$(document).ready(function() {
    var cookie = $("#cookie");

    var clicks = 0;
    cookie.on("click", function(){
        
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        
    });
});