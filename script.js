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


/* parallax effect script here */

document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var totalSectionHeight = document.getElementById('home').clientHeight + document.getElementById('content').clientHeight;

    // Fade out the intro text based on scroll
    var textOpacity = 1 - scrollPosition / (windowHeight / 2);
    document.getElementById('rotatedText').style.opacity = textOpacity > 0 ? textOpacity : 0;

    var progress = Math.min(1, scrollPosition / totalSectionHeight);

    // Pen and cap transformations
    var penRotation = progress * 180; // Open up to 180 degrees
    var capTranslation = progress * 200; // Move cap right up to 200px

    document.getElementById('pen').style.transform = `rotate(${penRotation}deg)`;
    document.getElementById('cap').style.transform = `translateX(${capTranslation}px)`;

    // Reverse transformations when scrolling beyond the content section
    if (scrollPosition > totalSectionHeight) {
        var reverseProgress = (scrollPosition - totalSectionHeight) / document.getElementById('footer').clientHeight;
        reverseProgress = Math.min(1, reverseProgress);
        penRotation = 180 - reverseProgress * 180;
        capTranslation = 200 - reverseProgress * 200;
        document.getElementById('pen').style.transform = `rotate(${penRotation}deg)`;
        document.getElementById('cap').style.transform = `translateX(${capTranslation}px)`;
    }
});

/* parallax effect script here */
