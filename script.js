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
    if (scrollY < windowHeight) {
        var opacity = 1 - (scrollY / windowHeight * 0.6); // Fades out to 0.4 opacity
        logoContainer.style.opacity = Math.max(opacity, 0.4); // Ensures opacity doesn't go below 0.4
    } else {
        logoContainer.style.opacity = 0.4;
    }

    // Curtain effect for pen and cap
    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');

    // Exit if required elements are not found
    if (!home || !footer || !pen || !cap) {
        console.log("Required elements not found, exiting curtain effect script.");
        return;
    }

    // Get bounding rectangles
    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    // Determine if the current scroll position is before, within or after home, and before footer
    if (homeRect.top > windowHeight) {
        // Before reaching the home section, the curtain is closed
        pen.style.transform = `translateX(50%)`;
        cap.style.transform = `translateX(-50%)`;
    } else if (footerRect.top < windowHeight) {
        // Starting to reach the footer section, start closing the curtain
        let distanceToFooter = footerRect.top - windowHeight;
        let percentClose = Math.min((100 - Math.max(distanceToFooter, -100)) / 100, 1);
        let translateX = 50 * (1 - percentClose);
        pen.style.transform = `translateX(${translateX}%)`;
        cap.style.transform = `translateX(-${translateX}%)`;
    } else {
        // Within home section and not yet to footer, the curtain is open
        pen.style.transform = `translateX(0%)`;
        cap.style.transform = `translateX(0%)`;
    }
});
