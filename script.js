
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
}; // Added closing bracket here

document.getElementById('download-cert2').onclick = function() {
    window.location.href = '/images/bare3.pdf'; // Replace with the actual path to your CV
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
        opacity = 1 - (scrollY / windowHeight * 0.7); // Fades out to 0.4 opacity
        logoContainer.style.opacity = Math.max(opacity, 0.3); // Ensures opacity doesn't go below 0.4
    } else {
        logoContainer.style.opacity = 0.3;
        opacity = 0.3;
    }

// Elements for curtain effect

    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');
    let pen2 = document.getElementById('pen2'); // Assuming this line is uncommented or defined somewhere

    // Exit if required elements are not found
    if (!home || !footer || !pen || !cap || !pen2) { 
        console.log("Required sections or elements not found, exiting curtain effect script.");
        return;
    }

    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    // Calculate effective scrollable range
    let startEffect = window.scrollY + homeRect.top;  // Starts at the top of 'home'
    let endEffect = window.scrollY + footerRect.bottom - windowHeight;  // Ends at the bottom of 'footer'

    if (scrollY >= startEffect && scrollY <= endEffect) {
        // Calculate the percent of the effect to apply based on scroll position
        let totalEffectRange = endEffect - startEffect;
        let currentScrollPosition = scrollY - startEffect;
        let percentOpen = Math.max(0, Math.min(currentScrollPosition / totalEffectRange, 1));

        updateTransforms(percentOpen, pen, cap, pen2);
    } else if (scrollY < startEffect) {
        // Before reaching the top of the home section
        resetTransforms(pen, cap, pen2);
    } else {
        // After passing the bottom of the footer section
        updateTransforms(1, pen, cap, pen2); // Ensure it's fully "open"
    }
});



function resetTransforms(pen, cap, pen2) {
    // Reset transformations to initial state as before
}

function updateTransforms(percentOpen, pen, cap, pen2) {
    // Define transformations here as before
 const viewportWidth = window.innerWidth;
    let translateXPen, translateXCap, translateXPen2;

if (viewportWidth > 1440) { // Above 1441px
        translateXPen = 130 * percentOpen;
        translateXCap = 135 * percentOpen;
    } else if (viewportWidth >= 1201) { // 1201px to 1440px
        translateXPen = 110 * percentOpen;
        translateXCap = 115 * percentOpen;
    } else if (viewportWidth >= 1025) { // 1025px to 1200px
        translateXPen = 95 * percentOpen;
        translateXCap = 100 * percentOpen;
    } else if (viewportWidth >= 768) { // 768px to 1024px
        translateXPen = 85 * percentOpen;
        translateXPen2 = 0 * percentOpen;
        translateXCap = 270 * percentOpen;
    } else if (viewportWidth >= 601) { // 601px to 767px
        translateXPen = 75 * percentOpen;
        translateXPen2 = 0 * percentOpen;
        translateXCap = 260 * percentOpen;
    } else if (viewportWidth >= 321) { // 321px to 600px
        translateXPen = 65 * percentOpen;
        translateXPen2 = 0 * percentOpen;
        translateXCap = 250 * percentOpen;
    } else { // Up to 320px
        translateXPen = 55 * percentOpen;
        translateXPen2 = 0 * percentOpen;
        translateXCap = 240 * percentOpen;
    }

  // Apply the transformations
    pen.style.transform = `translateX(${translateXPen}%)`;
    cap.style.transform = `translateX(-${translateXCap}%)`;
    pen2.style.transform = `translateX(${translateXPen2}%)`;
}
