// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

var dropdownContent = document.getElementById("dropdown-content");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    dropdownContent.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    dropdownContent.classList.remove("sticky");
  }
}
