$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
//JavaScript code for the reserve table modal
$(document).ready(function(){
    $("#buttonTable").click(function(){
        $("#tableModal").modal('toggle')
    });
    $("#closeTable").click(function(){
        $("#tableModal").modal('hide')
    });
});
//JavaScript code for the login modal
$(document).ready(function(){
    $("#loginLink").click(function(){
        $("#loginModal").modal('toggle')
    });
   $("#closeCard").click(function(){
        $("#loginModal").modal('hide')
    });
});