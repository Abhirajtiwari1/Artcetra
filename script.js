let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.offsetHeight;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0";
    } else {
        // Scrolling down
        navbar.style.top = `-${navbarHeight}px`;
    }
    
    // Show navbar when at the top of the page
    if (currentScrollPos === 0) {
        navbar.style.top = "0";
    }
    
    prevScrollPos = currentScrollPos;
}