$(document).ready(function() { // START OF JQUERY

    $("#homeShopImg").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#homeShopImg").css("opacity", ".8");
        $("#homeShopImg").css("background-size", "125%");
    });

    $("#homeShopImg").mouseleave(function(){
        $("#homeShopImg").css("opacity", "1");
        $("#homeShopImg").css("background-size", "105%"); //Hope you like it so far ;)
    });

    $("#homeRestImg").mouseenter(function(){
        $("#homeRestImg").css("opacity", ".8");
        $("#homeRestImg").css("background-size", "140%");
    });

    $("#homeRestImg").mouseleave(function(){
        $("#homeRestImg").css("opacity", "1");
        $("#homeRestImg").css("background-size", "120%");
    });

    $("#homeTranImg").mouseenter(function(){
        $("#homeTranImg").css("opacity", ".8");
        $("#homeTranImg").css("background-size", "135%");
    });

    $("#homeTranImg").mouseleave(function(){
        $("#homeTranImg").css("opacity", "1");
        $("#homeTranImg").css("background-size", "115%");
    });

    $("#homeLandImg").mouseenter(function(){
        $("#homeLandImg").css("opacity", ".8");
        $("#homeLandImg").css("background-size", "135%");
    });

    $("#homeLandImg").mouseleave(function(){
        $("#homeLandImg").css("opacity", "1");
        $("#homeLandImg").css("background-size", "115%");
    });

    $("#homeNYEImg").mouseenter(function(){
        $("#homeNYEImg").css("opacity", ".8");
        $("#homeNYEImg").css("background-size", "155%");
    });

    $("#homeNYEImg").mouseleave(function(){
        $("#homeNYEImg").css("opacity", "1");
        $("#homeNYEImg").css("background-size", "135%");
    });

    $("#homeAbtImg").mouseenter(function(){
        $("#homeAbtImg").css("opacity", ".8");
        $("#homeAbtImg").css("background-size", "135%");
    });

    $("#homeAbtImg").mouseleave(function(){
        $("#homeAbtImg").css("opacity", "1");
        $("#homeAbtImg").css("background-size", "115%");
    });

}); // END OF JQUERY