$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#html").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#css").css("opacity", ".2");
        $("#jquery").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#html").mouseleave(function(){
        $("#css").css("opacity", "1");
        $("#jquery").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });


    $("#css").mouseenter(function(){
        $("#html").css("opacity", ".2");
        $("#jquery").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#css").mouseleave(function(){
        $("#html").css("opacity", "1");
        $("#jquery").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

    $("#jquery").mouseenter(function(){
        $("#html").css("opacity", ".2");
        $("#css").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#jquery").mouseleave(function(){
        $("#html").css("opacity", "1");
        $("#css").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

});