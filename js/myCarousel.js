//script taken from a previous unit to edit to make the necessary animation
//https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
//Reaccessed May 17, 2020

//function to increase or decrease slide index
function plusSlides(n) {
    $(".mySlides:nth-of-type("+slideIndex+")").fadeOut(500,function(){ //fade out current image
        showSlides(slideIndex += n);
    });
}

//show current slide
function currentSlide(n) {
    $(".mySlides:nth-of-type("+slideIndex+")").fadeOut(500,function(){ //fade out current image
        showSlides(slideIndex = n);
    });
}

function showSlides(n) {
    var i; //creating 4 variables
    var slides = document.getElementsByClassName("mySlides"); //taking values from HTML doc
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1} //n cant be greater than the number of pictures available (loop back to beginning)
    if (n < 1) {slideIndex = slides.length} //n cant be less than 1. Go to end of slideshow (loop around)
    for (i = 0; i < slides.length; i++) { //make sure all of them are not displaying as a bigger picture
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //changing cursor type 
        dots[i].className = dots[i].className.replace("active", "");
    }
    $(".mySlides:nth-of-type("+slideIndex+")").fadeIn(500); //fading in new images using a different selector
    slides[slideIndex-1].style.display = "block"; //changing styles
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

$(document).ready(function(){
    //Hide the page elements at first
    $('html').css("display", "none");
    //fade in everything (wouldnt include images)
    $('html').fadeIn('300',function(){}); 
    $(".opacity").css("opacity", "1"); //just so main image is shown
});