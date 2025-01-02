// Animated Name
var typed = new Typed('#animatedName', {
  strings: ["Hi^1000, I'm Jeswin"],
  typeSpeed: 70,
  showCursor: false,
});

//Collapse Menu Handling

const navbar = document.getElementById("navbar");
const menubar = document.getElementById("menu-bar");
const collapseMenu = document.getElementById("collapse-menu");
const collapseMenuItems = document.getElementById("collapse-menu");
const menuIcon = document.getElementById("menu-bar");

function openCollapseMenu() {
    if (collapseMenu.style.height === "0px" || collapseMenu.style.height === "") {
        collapseMenu.style.height = collapseMenu.scrollHeight + "px";
    } else {
        collapseMenu.style.height = "0px";
    }
}

let prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-66.4px";
    collapseMenu.style.height = "0px";
  }
  prevScrollpos = currentScrollPos;
}

menubar.addEventListener('click', openCollapseMenu);

const cpYear = document.getElementById("year");
cpYear.innerHTML = new Date().getFullYear();