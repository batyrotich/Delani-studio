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