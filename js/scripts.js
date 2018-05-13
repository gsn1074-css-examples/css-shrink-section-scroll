$(function () { 
                
    $(window).on('scroll', function()
    {              
        var scrollTop = $(this).scrollTop();                   
        var topDistance = $('#shrink').offset().top;
        
        if ( topDistance < scrollTop ) 
        {                  
            $('#shrink').animate({"height": 0, "opacity": 0}, 500 );                
        }        
    });
});