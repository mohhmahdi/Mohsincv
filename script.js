document.querySelector('.contact-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Your message has been sent!');
});
// This ensures the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Adding click event listener to the WhatsApp chat icon
    document.querySelector('.whatsapp-chat-icon').addEventListener('click', () => {
        // Setting the display style of the WhatsApp chat container to 'block'
        document.querySelector('.whatsapp-chat-container').style.display = 'block';
    });
});
const whatsappContainer = document.querySelector('.whatsapp-chat-container');
if (whatsappContainer) {
    whatsappContainer.addEventListener('click', (e) => {
        if (!e.target.closest('.whatsapp-chat-icon')) {
            whatsappContainer.style.display = 'none';
        }
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Open/close menu when clicking the toggle
menuToggle.addEventListener('click', (event) => {
    // Prevent the click from being considered as outside click
    event.stopPropagation(); 

    navLinks.classList.toggle('show');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Optional: close menu when a link inside it is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {  // Only if a link was clicked
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});
document.getElementById('download-cv').onclick = function() {
    window.location.href = '/images/Mohsin_Mahdi_CV-H.pdf'; // Replace with the actual path to your CV
};



 // parallax effect script here 
window.addEventListener('scroll', function() {
    // Logo fade effect
window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // Sections
    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    if (!home || !footer) {
        console.error("Home or footer sections not found.");
        return;
    }

    // Pen and Cap elements
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');
    if (!pen || !cap) {
        console.error("Pen or cap elements not found.");
        return;
    }

    // Get bounding rectangles
    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    // Calculate visible heights
    let homeVisibleHeight = Math.max(0, windowHeight - homeRect.top);
    let footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);

    // Initial transformations
    let capStartX = 15; // Starting X position for cap
    let penStartX = -45; // Starting X position for pen

    // Final transformations
    let capEndX = -80; // End X position for cap
    let penEndX = 80; // End X position for pen

    // Home visible part handling
    if (homeRect.bottom > 0 && homeRect.top < windowHeight) { // Home is visible
        let progress = homeVisibleHeight / home.offsetHeight; // 0 to 1
        let capTranslateX = capStartX + (capEndX - capStartX) * (1 - progress);
        let penTranslateX = penStartX + (penEndX - penStartX) * (1 - progress);
        cap.style.transform = `translateX(${capTranslateX}%)`;
        pen.style.transform = `translateX(${penTranslateX}%)`;
    }

    // Footer visible part handling
    if (footerRect.top < windowHeight) { // Footer is entering the viewport
        let progress = footerVisibleHeight / footer.offsetHeight; // 0 to 1
        let capTranslateX = capStartX + (capEndX - capStartX) * progress;
        let penTranslateX = penStartX + (penEndX - penStartX) * progress;
        cap.style.transform = `translateX(${capTranslateX}%)`;
        pen.style.transform = `translateX(${penTranslateX}%)`;
    }
});
// parallax effect script here
