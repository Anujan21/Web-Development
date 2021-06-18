//Designed to scroll back to the top of the page with a click of a button
//https://www.youtube.com/watch?v=TjZw8VXCuOg
//Accessed May 17 2020

//only after document has loaded in
$(document).ready(function(){
    
    //when scroll is detected
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){ //after a certain point down the page
            $('#topOfPage').fadeIn(); //fade in the button
        }
        else{
            $('#topOfPage').fadeOut(); //otherwise, fade out the button (meaning we're back at the top of the page)
        }
    })

    //the animation to scroll back up to the top
    $("#topOfPage").click(function(){
        $('html,body').animate({scrollTop : 0},800)
    }); 
});