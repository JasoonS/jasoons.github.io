$(function() {

    var offset = $("#navigation").offset();
    var topPadding = 15;

    $(window).scroll(function() {
    
        if ($(window).scrollTop() > offset.top) {
        
            $("#navigation").stop().animate({
            
                marginTop: $(window).scrollTop() - offset.top + topPadding
            
            });
        
        } else {
        
            $("#navigation").stop().animate({
            
                marginTop: 0
            
            });
        
        }
        
            
    });

});
