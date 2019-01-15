$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#logo").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#cairo").css("opacity", ".2");
        $("#lion").css("opacity", ".2");
        $("#july").css("opacity", ".2");
        $("#portrait").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#logo").mouseleave(function(){
        $("#cairo").css("opacity", "1");
        $("#lion").css("opacity", "1");
        $("#july").css("opacity", "1");
        $("#portrait").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });


    $("#cairo").mouseenter(function(){
        $("#logo").css("opacity", ".2");
        $("#lion").css("opacity", ".2");
        $("#july").css("opacity", ".2");
        $("#portrait").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#cairo").mouseleave(function(){
        $("#logo").css("opacity", "1");
        $("#lion").css("opacity", "1");
        $("#july").css("opacity", "1");
        $("#portrait").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

    $("#lion").mouseenter(function(){
        $("#logo").css("opacity", ".2");
        $("#cairo").css("opacity", ".2");
        $("#july").css("opacity", ".2");
        $("#portrait").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#lion").mouseleave(function(){
        $("#logo").css("opacity", "1");
        $("#cairo").css("opacity", "1");
        $("#july").css("opacity", "1");
        $("#portrait").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

    $("#july").mouseenter(function(){
        $("#logo").css("opacity", ".2");
        $("#cairo").css("opacity", ".2");
        $("#lion").css("opacity", ".2");
        $("#portrait").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#july").mouseleave(function(){
        $("#logo").css("opacity", "1");
        $("#cairo").css("opacity", "1");
        $("#lion").css("opacity", "1");
        $("#portrait").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

    $("#portrait").mouseenter(function(){
        $("#logo").css("opacity", ".2");
        $("#cairo").css("opacity", ".2");
        $("#lion").css("opacity", ".2");
        $("#july").css("opacity", ".2");
        $("#footer").css("opacity", ".2");
        $("#homeHeroImg").css("opacity", ".5");
    });

    $("#portrait").mouseleave(function(){
        $("#logo").css("opacity", "1");
        $("#cairo").css("opacity", "1");
        $("#lion").css("opacity", "1");
        $("#july").css("opacity", "1");
        $("#footer").css("opacity", "1");
        $("#homeHeroImg").css("opacity", "1");
    });

});