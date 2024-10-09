
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
    var logoContainer = document.querySelector('.logo-container');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // Logo fade effect
    var opacity;
    if (scrollY < windowHeight) {
        opacity = 1 - (scrollY / windowHeight * 0.7); // Fades out to 0.4 opacity
        logoContainer.style.opacity = Math.max(opacity, 0.3); // Ensures opacity doesn't go below 0.3
    } else {
        logoContainer.style.opacity = 0.3;
        opacity = 0.3;
    }

    // Elements for curtain effect
    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');
    let pen2 = document.getElementById('pen2'); // Ensure this element exists in your HTML

    // Exit if required elements are not found
    if (!home || !footer || !pen || !cap || !pen2) { 
        console.log("Required sections or elements not found, exiting curtain effect script.");
        return;
    }

    // Get bounding rectangles
    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    // Check if we are within the desired transformation range
    if (scrollY >= homeRect.top - windowHeight && scrollY <= footerRect.bottom) {
        // Calculate percentage of the effect to apply based on scroll position
        let startEffect = homeRect.top - windowHeight;
        let endEffect = footerRect.bottom;
        let totalEffectRange = endEffect - startEffect;
        let currentScrollPosition = scrollY - startEffect;
        let percentOpen = Math.min(currentScrollPosition / totalEffectRange, 1);
        updateTransforms(percentOpen, pen, cap, pen2);
    } else {
        // Reset positions outside of the transformation range
        resetTransforms(pen, cap, pen2);
    }
});

function updateTransforms(percentOpen, pen, cap, pen2) {
    const viewportWidth = window.innerWidth;
    let translateXPen, translateXCap, translateXPen2;

    if (viewportWidth > 1440) { // Above 1441px
        translateXPen = 130 * percentOpen;
        translateXCap = 135 * percentOpen;
     
    } else if (viewportWidth >= 1201) { // 1201px to 1440px
        translateXPen = 110 * percentOpen;
        translateXCap = 115 * percentOpen;
        
    } else {
        // Continue for other conditions
        translateXPen = 95 * percentOpen;
        translateXCap = 100 * percentOpen;
        translateXPen2 = 0.5 * percentOpen; // Adjust appropriately
    }

    // Apply the transformations
    pen.style.transform = `translateX(${translateXPen}%)`;
    cap.style.transform = `translateX(-${translateXCap}%)`;
    pen2.style.transform = `translateX(${translateXPen2}%)`;
}

function resetTransforms(pen, cap, pen2) {
    let resetTransform = 'translateX(0%)';
    pen.style.transform = resetTransform;
    cap.style.transform = resetTransform;
    pen2.style.transform = resetTransform;
}
