var opacity = 1;
var goTo = 1;
function setOpacity () {
  var opacitySet = 1.0 - scrollY * .005;
  if (opacitySet >= 1) {
    opacitySet = 1
  } else if (opacitySet <= 0) {
    opacitySet = 0;
  }
  return opacitySet;
}
function setGoTo () {
  goTo = setOpacity();
}
function fadeOnScroll () {
  console.log("scroll");
  setGoTo();
  fade();
}

function mouseOver () {
  goTo = 1;
  fade();
}

function mouseOut () {
  if (scrollY > 10 && scrollY < 200) {
    setGoTo();
    fade();
  } else if (scrollY >= 200) {
    goTo = 0;
    fade();
  } 
}
function fade () {
  console.log("fading opacity is " + opacity + "end is " + goTo);
  if (opacity !== goTo) {
    var fadeTimer = setTimeout(function () { fade()}, 10);
    if (Math.abs(opacity-goTo) < .1) {
      opacity = goTo;
      clearTimeout(fadeTimer);
      console.log("clear");
    } else if (opacity > goTo) {
      opacity -= .025;
    } else {
      opacity += .025;
    }
  }
  var setOpacity = "opacity:" + opacity + ";";
  document.getElementById("header").setAttribute("style", setOpacity);
}
      
