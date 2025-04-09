// Initialize the scroll behavior of the header
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down: Hide the header
        header.classList.add("header-hidden");
    } else {
        // Scrolling up: Show the header
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
});

// Reapply the responsiveness if needed
window.dispatchEvent(new Event('resize'));