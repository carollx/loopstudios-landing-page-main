function myFunction() {
  var x = document.getElementById("myTopnav");
  var img = document.getElementById("iconHamburger");
  var titleH1 = document.getElementsByClassName("title")[0];
  var body = document.getElementsByTagName("body")[0];

  if (x.className === "topnav") {
    x.className += " responsive";
    img.src = "images/icon-close.svg";
    titleH1.style.visibility = 'hidden';
    body.style.overflow = 'hidden';

  } else {
    x.className = "topnav";
    img.src = "images/icon-hamburger.svg";
    titleH1.style.visibility = 'visible';
    body.style.overflow = 'visible';
  }

}