$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#leFrenchDad").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#timesSquare").css("opacity", ".2");
        $("#jquery").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#leFrenchDad").mouseleave(function(){
        $("#timesSquare").css("opacity", "1");
        $("#jquery").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });


    $("#timesSquare").mouseenter(function(){
        $("#leFrenchDad").css("opacity", ".2");
        $("#jquery").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#timesSquare").mouseleave(function(){
        $("#leFrenchDad").css("opacity", "1");
        $("#jquery").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

});