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
    var logoContainer = document.querySelector('.logo-container');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    if (scrollY < windowHeight) {
        var opacity = 1 - (scrollY / windowHeight * 0.6); // Fades out to 0.4 opacity
        logoContainer.style.opacity = Math.max(opacity, 0.4); // Ensures opacity doesn't go below 0.4
    } else {
        logoContainer.style.opacity = 0.4;
    }
    // Sections

document.addEventListener("DOMContentLoaded", function() {
    const pen = document.getElementById('pen');
    const cap = document.getElementById('cap');
    const homeSection = document.querySelector('.home'); // Adjust selector as needed
    const contactSection = document.querySelector('.contact'); // Adjust selector as needed

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let homeTop = homeSection.offsetTop;
        let contactTop = contactSection.offsetTop;

        if (scrollPosition >= homeTop && scrollPosition < contactTop) {
            // Scrolling down in the home section
            pen.style.transform = 'translate3d(80%, 0px, 0px) scale3d(1, 1, 1)';
            cap.style.transform = 'translate3d(-80%, 0px, 0px) scale3d(1, 1, 1)';
        } else {
            // Outside the home section
            pen.style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1)';
            cap.style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1)';
        }
    });
});
