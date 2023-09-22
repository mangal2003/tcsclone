let chatbot = document.querySelector("#chatBox");

gsap.to("#chatBox", {
  transform: "translateX(78px)",
  scrollTrigger: {
    trigger: "#chatBox",
    scroller: "body",
    start: "bottom 85%",
    end: "bottom 85%",
    scrub: 1,
    ease: "linear",
  },
});

let first = document.getElementById("img1");
let second = document.getElementById("img2");
let third = document.getElementById("img3");
let forth = document.getElementById("img4");

let first1 = document.getElementById("vh_70_1");
let second1 = document.getElementById("vh_70_2");
let third1 = document.getElementById("vh_70_3");
let forth1 = document.getElementById("vh_70_4");

function slide1() {
  first1.classList.add("indexup");
  first.classList.add("active");
  second1.classList.remove("indexup");
  second.classList.remove("active");
  third1.classList.remove("indexup");
  third.classList.remove("active");
  forth1.classList.remove("indexup");
  forth.classList.remove("active");
}

function slide2() {
  first1.classList.remove("indexup");
  first.classList.remove("active");
  second1.classList.add("indexup");
  second.classList.add("active");
  third1.classList.remove("indexup");
  third.classList.remove("active");
  forth1.classList.remove("indexup");
  forth.classList.remove("active");
}

function slide3() {
  first1.classList.remove("indexup");
  first.classList.remove("active");
  second1.classList.remove("indexup");
  second.classList.remove("active");
  third1.classList.add("indexup");
  third.classList.add("active");
  forth1.classList.remove("indexup");
  forth.classList.remove("active");
}

function slide4() {
  first1.classList.remove("indexup");
  first.classList.remove("active");
  second1.classList.remove("indexup");
  second.classList.remove("active");
  third1.classList.remove("indexup");
  third.classList.remove("active");
  forth1.classList.add("indexup");
  forth.classList.add("active");
}

let menulist = document.getElementById("menulist");
function menu() {
  menulist.classList.remove("none");
  let menu = document.getElementById("menu");
  menu.classList.add("none");
  let cancle = document.getElementById("cancle");
  cancle.classList.remove("none");
}

function closemenu() {
  menulist.classList.add("none");
  let menu = document.getElementById("menu");
  menu.classList.remove("none");
  let cancle = document.getElementById("cancle");
  cancle.classList.add("none");
}
