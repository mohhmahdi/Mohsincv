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

    // Curtain effect for cap and pen
    let home = document.getElementById('home');
    let footer = document.getElementById('footer');

    if (!home || !footer) {
        console.log("Home or footer sections not found, exiting curtain effect script.");
        return; // Exit if home or footer sections are not found
    }

    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    let homeVisibleHeight = windowHeight - homeRect.top;
    let footerVisibleHeight = windowHeight - footerRect.top;

    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');

    if (!pen || !cap) {
        console.log("Pen or cap elements not found, exiting curtain effect script.");
        return; // Exit if pen or cap elements are not found
    }

    // Adjust this calculation based on your specific layout and what "fully open" means in pixel or percentage terms
    if (homeRect.bottom > 0 && homeRect.top < windowHeight) {
        let percentClosed = 1 - Math.min(homeVisibleHeight / home.offsetHeight, 1);
        let translateX = 50 * percentClosed;  // Adjust the multiplier to control the extent of movement
        pen.style.transform = `translateX(-${translateX}%)`;
        cap.style.transform = `translateX(${translateX}%)`;
    } else if (footerRect.top < windowHeight) {
        let percentOpen = Math.min(footerVisibleHeight / footer.offsetHeight, 1);
        let translateX = 50 * (1 - percentOpen);  // Adjust the multiplier to control the extent of movement
        pen.style.transform = `translateX(-${translateX}%)`;
        cap.style.transform = `translateX(${translateX}%)`;
    }
});
// parallax effect script here
