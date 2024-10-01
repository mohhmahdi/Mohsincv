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


window.addEventListener('scroll', function() {
    // Variables for window properties and elements
    var logoContainer = document.querySelector('.logo-container');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // Logo fade effect
    var opacity;
    if (scrollY < windowHeight) {
        opacity = 1 - (scrollY / windowHeight * 0.6); // Fades out to 0.4 opacity
        logoContainer.style.opacity = Math.max(opacity, 0.4); // Ensures opacity doesn't go below 0.4
    } else {
        logoContainer.style.opacity = 0.4;
    }

    // Elements for curtain effect
    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');

    // Exit if required elements are not found
    if (!home || !footer || !pen || !cap) {
        console.log("Required sections or elements not found, exiting curtain effect script.");
        return;
    }

    // Get bounding rectangles
    let homeRect = home.getBoundingClientRect();

    if (homeRect.top <= 0 && homeRect.bottom >= 0) {
        // When home section is reached
        let footerRect = footer.getBoundingClientRect();
        let distanceFromFooter = Math.max(0, footerRect.top - windowHeight);
        let percentOpen = Math.min(distanceFromFooter / 1000, 1);

        let translateXPen = 100 * percentOpen; // Adjusted outward translation of the pen
        let translateXCap = 75 * percentOpen; // Adjusted translation of the cap
        pen.style.transform = `translateX(${translateXPen}%)`;
        cap.style.transform = `translateX(-${translateXCap}%)`;
    } else {
        // Reset positions when not in the range of the home section
        pen.style.transform = `translateX(0%)`;
        cap.style.transform = `translateX(0%)`;
    }
});
