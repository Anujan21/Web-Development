//code snippet 1, to create a slideshow gallery
//https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
//Accessed March 21, 2020

/* //this code was used again in the script myCarousel.js
//function to increase or decrease slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//show current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
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
  slides[slideIndex-1].style.display = "block"; //changing styles
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}*/

  //code snippet 2, to validate email addresses, as well as first and last name
  //https://www.youtube.com/watch?v=vPVx-zGFh0w
  //Accessed April 5, 2020


  //for email
  function validateEmail() 
  {
    var text = document.getElementById("emailaddress").value; //grab value of emailaddress

    var regx = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/; //identify the 4 parts of an email address and allow certain characters
      if(regx.test(text)) //if conditions match, below attributes are set 
      {
        document.getElementById("lbltext3").innerHTML = "Valid";
        document.getElementById("lbltext3").style.visibility = "visible";
        document.getElementById("lbltext3").style.color = "green";
      }
      else //if conditions do not match, below attributes are set
      {
        document.getElementById("lbltext3").innerHTML = "Invalid";
        document.getElementById("lbltext3").style.visibility = "visible";
        document.getElementById("lbltext3").style.color = "red";
      }
  }

  //for first name (same structure as email)
  function validateFName()
  {
    var text = document.getElementById("firstname").value;

    var regx = /^([a-z A-Z]+)(-[a-z A-Z]+)?$/;
      if(regx.test(text))
      {
        document.getElementById("lbltext1").innerHTML = "Valid";
        document.getElementById("lbltext1").style.visibility = "visible";
        document.getElementById("lbltext1").style.color = "green";
      }
      else
      {
        document.getElementById("lbltext1").innerHTML = "Invalid";
        document.getElementById("lbltext1").style.visibility = "visible";
        document.getElementById("lbltext1").style.color = "red";
      }
  }

  //for last name (same structure as email)
  function validateLName()
  {
    var text = document.getElementById("lastname").value;

    var regx = /^([a-z A-Z]+)(-[a-z A-Z]+)?$/;
      if(regx.test(text))
      {
        document.getElementById("lbltext2").innerHTML = "Valid";
        document.getElementById("lbltext2").style.visibility = "visible";
        document.getElementById("lbltext2").style.color = "green";
      }
      else
      {
        document.getElementById("lbltext2").innerHTML = "Invalid";
        document.getElementById("lbltext2").style.visibility = "visible";
        document.getElementById("lbltext2").style.color = "red";
      }
  }

  //Last updated Date at bottom of page
  function date(){
    document.getElementById("updated").innerHTML = "Last Updated May 2020";
  }