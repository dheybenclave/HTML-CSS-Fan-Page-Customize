function mymosover()
{
document.getElementById("table1").style.transition = "all.3s ease-in-out";
timeMsg();
}
function timeMsg()
{
setTimeout("alertMsg()",200);
}
function alertMsg()
{
document.getElementById("table1").style.display = "block";

}

function mymosout()
{

document.getElementById("table1").style.display = "none";
document.getElementsByTagName('nav').style.display = "none";
}

function full12(code)
{
 var h = window.screen.height;
 var w = window.screen.height;
document.getElementById('imageschoose').src  = code;
document.getElementById('imageshow').style  = "background-color:black; opacity:0.9; ";
document.getElementById('imageschoose').style = "display:block;";
document.getElementById('closebutton').style = "display:block;";
}
function clsebot()
{
  document.getElementById('imageshow').style  = "background-color:none;";
  document.getElementById('imageschoose').style = "display:none;";
}
