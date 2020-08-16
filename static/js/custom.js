/*For coverting transparent navbar to solid*/
$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.fixed-top').addClass('bg-primary');
    } else {
        $('.fixed-top').removeClass('bg-primary');
    }
});