// Collapse Navbar
var navbarCollapse = () => {
    if ($("#mainNav").offset().top > 40) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
 navbarCollapse();
 // Collapse the navbar when page is scrolled
 $(window).scroll(navbarCollapse);



 // When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-100px";
  }
}