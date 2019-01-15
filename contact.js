$(document).ready(function() { // START OF JQUERY

    $("#webpage").css("display", "none");
    $("#img").css("display", "none");

    $("#webpage").delay(600).fadeIn(1500);
    $("#img").delay(600).fadeIn(1500);

    $("#contactEmail").css("display", "none");
    $("#contactPhone").css("display", "none");
    $("#contactPhone1").css("display", "none");
    $("#contactPhone2").css("display", "none");

    $("#email").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#contactEmail").slideDown(200);
    });

    $("#phone").mouseenter(function(){ //Effects the different panels of the homepage ... @mrelirooney
        $("#contactPhone").slideDown(200);
        $("#contactPhone1").slideDown(200);
        $("#contactPhone2").slideDown(200);
    });

});