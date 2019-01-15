$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#homeResumeImg").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#homeResumeImg").css("opacity", ".8");
        $("#homeResumeImg").css("background-size", "110%");
    });

    $("#homeResumeImg").mouseleave(function(){
        $("#homeResumeImg").css("opacity", "1");
        $("#homeResumeImg").css("background-size", "100%"); //Hope you like it so far ;)
    });


    $("#homeDesImg").mouseenter(function(){
        $("#homeDesImg").css("opacity", ".8");
        $("#homeDesImg").css("background-size", "110%");
    });

    $("#homeDesImg").mouseleave(function(){
        $("#homeDesImg").css("opacity", "1");
        $("#homeDesImg").css("background-size", "100%");
    });

    $("#homeDevImg").mouseenter(function(){
        $("#homeDevImg").css("opacity", ".8");
        $("#homeDevImg").css("background-size", "110%");
    });

    $("#homeDevImg").mouseleave(function(){
        $("#homeDevImg").css("opacity", "1");
        $("#homeDevImg").css("background-size", "100%");
    });

    $("#homeWebImg").mouseenter(function(){
        $("#homeWebImg").css("opacity", ".8");
        $("#homeWebImg").css("background-size", "110%");
    });

    $("#homeWebImg").mouseleave(function(){
        $("#homeWebImg").css("opacity", "1");
        $("#homeWebImg").css("background-size", "100%");
    });

    $("#homeAbtImg").mouseenter(function(){
        $("#homeAbtImg").css("opacity", ".8");
        $("#homeAbtImg").css("background-size", "110%");
    });

    $("#homeAbtImg").mouseleave(function(){
        $("#homeAbtImg").css("opacity", "1");
        $("#homeAbtImg").css("background-size", "100%");
    });

    $("#homeContactImg").mouseenter(function(){
        $("#homeContactImg").css("opacity", ".8");
        $("#homeContactImg").css("background-size", "110%");
    });

    $("#homeContactImg").mouseleave(function(){
        $("#homeContactImg").css("opacity", "1");
        $("#homeContactImg").css("background-size", "100%");
    });

}); // END OF JQUERY