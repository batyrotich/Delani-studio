$(document).ready(function () {
    $(".myportfolio").hover(
        function () {
            $(this)
                .find(".overlay")
                .show();
        },
        function () {
            $(this)
                .find(".overlay")
                .hide();
        }
    );
});



$(document).ready(function () {
    $("#toggle").click(function () {
        $("#p1").show();
    });
    $("#toggle").click(function () {
        $("#toggle").hide();
    });

    $("#p1").click(function () {
        $("#toggle").show();
    });
    $("#p1").click(function () {
        $("#p1").hide();
    });
    $("#toggle2").click(function () {
        $("#p2").show();
    });
    $("#toggle2").click(function () {
        $("#toggle2").hide();
    });

    $("#p2").click(function () {
        $("#toggle2").show();
    });
    $("#p2").click(function () {
        $("#p2").hide();
    });
    $("#toggle3").click(function () {
        $("#p3").show();
    });
    $("#toggle3").click(function () {
        $("#toggle3").hide();
    });

    $("#p3").click(function () {
        $("#toggle3").show();
    });
    $("#p3").click(function () {
        $("#p3").hide();
    });

    $(".four").hover(function () {
        $("#overlay4").show();
    });
    $(".four").mouseleave(function () {
        $("#overlay4").hide();
    });

    $(".three").hover(function () {
        $("#overlay3").show();
    });
    $(".three").mouseleave(function () {
        $("#overlay3").hide();
    });

    $(".two").hover(function () {
        $("#overlay2").show();
    });
    $(".two").mouseleave(function () {
        $("#overlay2").hide();
    });

    $(".one").hover(function () {
        $("#overlay1").show();
    });
    $(".one").mouseleave(function () {
        $("#overlay1").hide();
    });

    $(".five").hover(function () {
        $("#overlay5").show();
    });
    $(".five").mouseleave(function () {
        $("#overlay5").hide();
    });

    $(".six").hover(function () {
        $("#overlay6").show();
    });
    $(".six").mouseleave(function () {
        $("#overlay6").hide();
    });

    $(".seven").hover(function () {
        $("#overlay7").show();
    });
    $(".seven").mouseleave(function () {
        $("#overlay7").hide();
    });

    $(".eight").hover(function () {
        $("#overlay8").show();
    });
    $(".eight").mouseleave(function () {
        $("#overlay8").hide();
    });

    event.preventDefault();
});


