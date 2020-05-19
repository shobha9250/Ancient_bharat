var target1=document.getElementById("prof1");
var target2=document.getElementById("prof2");
var target3=document.getElementById("prof3");
var target4=document.getElementById("prof4");
var target5=document.getElementById("prof5");
var target6=document.getElementById("prof6");
var target7=document.getElementById("prof7");
var target;
function prof(target) {	
	target1.style.width="8.35vw";
	target2.style.width="8.35vw";
	target3.style.width="8.35vw";
	target4.style.width="8.35vw";
	target5.style.width="8.35vw";
	target6.style.width="8.35vw";
	target7.style.width="8.35vw";
	target.style.width="37vw";
}
function leave_profile_slider()
{
	target1.style.width="12.444vw";
	target2.style.width="12.444vw";
	target3.style.width="12.444vw";
	target4.style.width="12.444vw";
	target5.style.width="12.444vw";
	target6.style.width="12.444vw";
	target7.style.width="12.444vw";
}

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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
function fb_open()
{
	window.open("https://www.facebook.com");
}
function insta_open()
{
	window.open("https://www.instagram.com");
}
function utube_open()
{
	window.open("https://www.youtube.com");
}
function ll_open()
{
	window.open("https://www.linkedin.com");
}
function twit_open()
{
	window.open("https://www.twitter.com");
}

function open_shivaji()
{
	window.open("profile_shivaji.html","_self");
}
function open_akbar()
{
	window.open("profile_akbar.html","_self");
}
function open_chandragupta()
{
	window.open("profile_maurya.html","_self");
}
function open_aurangzeb()
{
	window.open("profile_aurangzeb.html","_self");
}
function open_ashoka()
{
	window.open("profile_ashoka.html","_self");
}
function open_shahjahan()
{
	window.open("profile_shahjahan.html","_self");
}
function open_gandhi()
{
	window.open("profile_gandhi.html","_self");
}
function open_login()
{
	window.open("login_page.html","_self");
}

function open_kalinga()
{
	window.open("kalinga.htm","_self");
}
function open_panipat()
{
	window.open("panipat.htm","_self");
}
function open_plassey()
{
	window.open("plassey.htm","_self");
}
function open_khanwa()
{
	window.open("khanwa.htm","_self");
}
function open_haldighati()
{
	window.open("haldighati.htm","_self");
}
function open_buxar()
{
	window.open("buxar.htm","_self");
}