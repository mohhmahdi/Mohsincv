
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
    window.location.href = '/images/Mohsin_Mahdi_-_Hybrid_Role_in_Front-End_Development,_UIUX_Design.pdf'; // Replace with the actual path to your CV
}; // Added closing bracket here

document.getElementById('download-cert2').onclick = function() {
    window.location.href = '/images/Bare3-En.pdf'; // Replace with the actual path to your CV
}; // Added closing bracket here

document.getElementById('download-cert1').onclick = function() {
    window.location.href = '/images/edoxi.pdf'; // Replace with the actual path to your CV
}; // Added closing bracket here
// good js 
window.addEventListener('scroll', function() {
    // Variables for window properties and elements
    var logoContainer = document.querySelector('.logo-container');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // Logo fade effect
    var opacity;
    if (scrollY < windowHeight) {
        opacity = 1 - (scrollY / windowHeight * 0.8); // Fades out to 0.3 opacity (not 0.4 as previously commented)
        logoContainer.style.opacity = Math.max(opacity, 0.2); // Ensures opacity doesn't go below 0.3
    } else {
        logoContainer.style.opacity = 0.2; // Ensures opacity is set to 0.3 when scrolled past the window height
    }
}); // Correctly closed function and event listener
