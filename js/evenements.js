var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("imgSelect");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function poppup()
{
document.getElementById("popup").style.display = "grid";
document.getElementById("cover").style.display = "block";
document.getElementById("popup").style.animation="popupOpen 0.5s"
}

function fermerPopUp()
{       
        document.getElementById("popup").style.animation="popupClose 0.3s"
        setTimeout(function() {
          document.getElementById("popup").style.display = "none";
        }, 300);
        
        document.getElementById("cover").style.display = "none";
}

function enterHoverEventRecent()
{
  document.getElementsByClassName("border-outer-top")[0].style.borderColor = "#dfc516";
  document.getElementsByClassName("border-top")[0].style.borderColor = "#dfc516";
}

function exitHoverEventRecent()
{
  document.getElementsByClassName("border-outer-top")[0].style.borderColor = "#6a07d2";
  document.getElementsByClassName("border-top")[0].style.borderColor = "#ff04a1";
}

function enterHoverAffichez()
{
  document.getElementsByClassName("border-outer")[0].style.borderColor = "#dfc516";
  document.getElementsByClassName("border")[0].style.borderColor = "#dfc516";
}

function exitHoverAffichez()
{
  document.getElementsByClassName("border-outer")[0].style.borderColor = "#6a07d2";
  document.getElementsByClassName("border")[0].style.borderColor = "#ff04a1";
}

function afficherPlusEvent()
{
  if (document.getElementById("grille2").style.display === "none") 
  {
    document.getElementById("grille2").style.display = "grid";
    document.getElementsByClassName("border")[0].innerHTML = "afficher moins";
  } 
  else 
  {
    document.getElementById("grille2").style.display = "none";
    document.getElementsByClassName("border")[0].innerHTML = "afficher plus";
  }
}

function afficherPlusEventMobile()
{
  if (document.getElementById("grille2").style.display === "none") 
  {
    document.getElementById("grille2").style.display = "grid";
    document.getElementById("plus1").style.borderRight="0em solid #6a07d2";
    document.getElementById("plus4").style.borderLeft="0em solid  #dfc516";
  } 
  else 
  {
    document.getElementById("grille2").style.display = "none";
    document.getElementById("plus1").style.borderRight="1em solid #6a07d2";
    document.getElementById("plus4").style.borderLeft="1em solid  #dfc516";
  }
}
