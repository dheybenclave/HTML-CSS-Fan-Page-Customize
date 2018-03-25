/*var modal = document.getElementById('myModal');
{
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

function zoompic()
{

  document.getElementById('myModal').style = "display:block;position:fixed;";

  document.getElementById('body1').style = "position:fixed";
}
function closeall()
{
  document.getElementById('myModal').style = "display:none";
  document.getElementById('body1').style = "position:none";
}
function myFunction() {
    var elmnt = document.getElementById("body1");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}
*/

var x = 5;
var getpicimg;
function largepic(code)
{
  var c = this.src;
  var ccc = code;
  document.getElementById('bigimage').src= code;
x = ccc.replace(".jpg"," ");
arrow();


}
function arrow()
{
  document.getElementById('spnp').style = "visibility:visible";

}
function arrow2()
{
  document.getElementById('spnn').style = "visibility:hidden";
}

function next()
{ x++;
    var pic = x+".jpg";
    document.getElementById('bigimage').src= pic;
      document.getElementById('spnp').style = "visibility:visible";
if(x == 37)
{
  arrow2();
}
else{}
}
function prev()
{

x--;
var pic = x+".jpg";
document.getElementById('bigimage').src= pic;
if(x <=5)
{
  document.getElementById('bigimage').src= "5.jpg";
  x=5;
  document.getElementById('spnp').style = "visibility:hidden";
}
else {

}

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
