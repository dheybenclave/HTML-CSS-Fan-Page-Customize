function mylist(code, num)
{
  var pos;
document.getElementById('playme').src=code;
for(i = 0; i < 30; i++)
{
  pos = i + 1;
  var tdid1 = "td"+pos;
  document.getElementById(pos).style = "display:none;";
  document.getElementById(tdid1).style = "background-color:inherit;"
  document.getElementById("tdr"+pos).style = "background-color:inherit;";
}
document.getElementById(num).style = "display:block;float:right;";
var tdid2  = "td"+num;
document.getElementById(tdid2).style = "background-color: #101010;";
document.getElementById("tdr"+num).style = "background-color:#101010;";
}


function mydetails(code)
{
 var s =document.getElementsByTagName('td').title;
document.getElementById('nsong').innerHTML =code;
}

function mymouseover(code)
{
document.getElementById('footer').style = "background-color:"+code+";transition: all 0.5s;";
}

function mymouseout()
{
document.getElementById('footer').style = "background-color:#101010;transition: all 0.5s";

document.getElementById('fb').style = "padding-right:inherit;";
document.getElementById('tw').style = "padding-right:inherit;";
document.getElementById('it').style = "padding-right:inherit;";
document.getElementById('yt').style = "padding-right:inherit;";
}
function mymouseover1()
{
  document.getElementById('fb').style = "padding-right:20%;";
  document.getElementById('tw').style = "padding-right:20%;";
  document.getElementById('it').style = "padding-right:20%;";
  document.getElementById('yt').style = "padding-right:20%;";
}
