const text = document.querySelector("#container1");
window.setTimeout(function() {
  text.classList.add("fade-in");
}, 2000);

window.addEventListener("load", function() {
  var headerelement = document.querySelector(".header");
  headerelement.classList.add("slide-in-1");
  var container2element = document.querySelector(".container2");
  container2element.classList.add("slide-in-2");
});

const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");

circle1.addEventListener("click", function() {
  circle1.style.width = "1.5vh";
  circle1.style.height = "1.5vh";
  circle1.style.borderRadius = "25px";
  circle1.style.margin ="0.5vh 0vh";
  circle2.style.width = "1vh";
  circle2.style.height = "1vh";
  circle2.style.borderRadius = "25px";
  circle2.style.margin = "0.5vh 0.25vh";
  circle3.style.width = "1vh";
  circle3.style.height = "1vh";
  circle3.style.borderRadius = "25px";
  circle3.style.margin = "0.5vh 0.25vh";
});

circle2.addEventListener("click", function() {
  circle2.style.width = "1.5vh";
  circle2.style.height = "1.5vh";
  circle2.style.borderRadius = "25px";
  circle2.style.margin ="0.5vh 0vh";
  circle1.style.width = "1vh";
  circle1.style.height = "1vh";
  circle1.style.borderRadius = "25px";
  circle1.style.margin = "0.5vh 0.25vh";
  circle3.style.width = "1vh";
  circle3.style.height = "1vh";
  circle3.style.borderRadius = "25px";
  circle3.style.margin = "0.5vh 0.25vh";
});

circle3.addEventListener("click", function() {
  circle3.style.width = "1.5vh";
  circle3.style.height = "1.5vh";
  circle3.style.borderRadius = "25px";
  circle3.style.margin ="0.5vh 0vh";
  circle1.style.width = "1vh";
  circle1.style.height = "1vh";
  circle1.style.borderRadius = "25px";
  circle1.style.margin = "0.5vh 0.25vh";
  circle2.style.width = "1vh";
  circle2.style.height = "1vh";
  circle2.style.borderRadius = "25px";
  circle2.style.margin = "0.5vh 0.25vh";
});