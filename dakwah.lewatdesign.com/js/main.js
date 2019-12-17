$(document).ready(function(){
    var overlay = $(".flex-item").children("a");
    overlay.hover(
        function(){
            $(".overlay").addClass("active");
        },
        function(){
            $(".overlay").removeClass("active");
        }
    );
})