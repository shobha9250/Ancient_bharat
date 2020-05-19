
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
function open_about()
{
	window.open("about.html","_self");	
}
function open_home()
{
	window.open("home.html","_self");	
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
var temp1=0,temp2=0;
function profile_drop_menu()
{
	if(temp1==0)
	{	
		document.getElementById("profiles").style.backgroundColor="#1c1c1c"; 
		document.getElementById("profile_dropdown").style.display="block";
		temp1=1;
	}
	else
	{
		document.getElementById("profiles").style.backgroundColor="#5c5c5c"; 
		document.getElementById("profile_dropdown").style.display="none";
		temp1=0;
	}	
}
function events_drop_menu()
{
	if(temp2==0)
	{	
		document.getElementById("events").style.backgroundColor="#1c1c1c"; 
		document.getElementById("event_dropdown").style.display="block";
		temp2=1;
	}
	else
	{
		document.getElementById("events").style.backgroundColor="#5c5c5c"; 
		document.getElementById("event_dropdown").style.display="none";
		temp2=0;
	}	
}
var target;
function change_color_dark(target)
{
	target.style.backgroundColor="#1c1c1c";
}
function change_color_light(target)
{
	target.style.backgroundColor="#5c5c5c";
}