$(document).on(ready, function(){
    $('#mycarousel').carousel({ interval: 2000});
    $("#carouselButton").on(click, function(){
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
$(document).on(ready, function(){
    $("#buttonTable").on(click,function(){
        $("#tableModal").modal('toggle')
    });
    $("#closeTable").on(click, function(){
        $("#tableModal").modal('hide')
    });
});
//JavaScript code for the login modal
$(document).on(ready, function(){
    $("#loginLink").on(click, function(){
        $("#loginModal").modal('toggle')
    });
   $("#closeCard").on(click, function(){
        $("#loginModal").modal('hide')
    });
});