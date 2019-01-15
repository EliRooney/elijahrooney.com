$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#msuImg").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#msuImg").css("opacity", ".2");
        $("#msuImg").css("background-size", "111%");
    });

    $("#msuImg").mouseleave(function(){
        $("#msuImg").css("opacity", "1");
        $("#msuImg").css("background-size", "101%"); //Hope you like it so far ;)
    });


    $("#reniImg").mouseenter(function(){
        $("#reniImg").css("opacity", ".2");
        $("#reniImg").css("background-size", "110%");
    });

    $("#reniImg").mouseleave(function(){
        $("#reniImg").css("opacity", "1");
        $("#reniImg").css("background-size", "100%");
    });

    $("#njImg").mouseenter(function(){
        $("#njImg").css("opacity", ".2");
        $("#njImg").css("background-size", "110%");
    });

    $("#njImg").mouseleave(function(){
        $("#njImg").css("opacity", "1");
        $("#njImg").css("background-size", "100%");
    });

    $("#travel").mouseenter(function(){
        $("#travel").css("opacity", ".2");
        $("#travel").css("background-size", "121%");
    });

    $("#travel").mouseleave(function(){
        $("#travel").css("opacity", "1");
        $("#travel").css("background-size", "111%");
    });

    $("#mission").mouseenter(function(){
        $("#mission").css("opacity", ".2");
        $("#mission").css("background-size", "110%");
    });

    $("#mission").mouseleave(function(){
        $("#mission").css("opacity", "1");
        $("#mission").css("background-size", "100%");
    });

});