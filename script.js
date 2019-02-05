$(document).ready(function() 
    var cookie = $("#cookie");

    cookie.on("click", function(){
        var clicks = 0;
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        
    };