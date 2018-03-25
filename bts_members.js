window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('hov1').style = "position:fixed;float:right;margin-left:1525px;";
        document.getElementById('hov2').style = "position:fixed;float:right;margin-left:1385px;";
        document.getElementById('hov3').style = "position:fixed;float:right;margin-left:1237px;";
        document.getElementById('hov4').style = "position:fixed;float:right;margin-left:1095px;";
    } else {

        document.getElementById('hov1').style = "float:right;";
        document.getElementById('hov2').style = "float:right;";
        document.getElementById('hov3').style = "float:right;";
        document.getElementById('hov4').style = "float:right;";
    }
}
function myf()
{
  var asd = document.body.scrollTop;
  document.getElementById('check').innerHTML= asd;
}
function scrollWin(code)
{
    window.scrollTo(0,code);
    document.getElementById('bodys').style = "transition:0.7s;transition-duration:4s; ";
    window.scrollTo.style = "transition: all 0.5s;transition-duration:4s; ";
    window.scrollTop.style = "transition: all 0.5s;transition-duration:4s; ";
    document.body.scrollTop.style = "transition:0.5s;transition-duration:4s; ";

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
