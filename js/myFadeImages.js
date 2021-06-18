//Originally designed to fade in images, but also fades in entire page now

//This link was used to fade in one image at a time
//https://stackoverflow.com/questions/379900/fade-in-each-element-one-after-another
//Accessed May 17, 2020

$(document).ready(function(){
    //Hide the page elements at first
    $('html').css("display", "none");
    //fade in everything (wouldnt include images)
    $('html').fadeIn('300',function(){
        //fade in images after html doc finished fading in
        $("img").each(function(index) {
            $(this).delay(200*index).fadeTo(200,1); //delay between each image of 200ms
        });
    });
});