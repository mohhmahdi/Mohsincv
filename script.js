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
    var docHeight = document.body.offsetHeight;
    var footerHeight = document.getElementById('footer').clientHeight;
    var footerOffset = docHeight - footerHeight;

    // Fade out the rotated text
    var textOpacity = 1 - scrollPosition / (windowHeight / 2);
    document.getElementById('rotatedText').style.opacity = textOpacity > 0 ? textOpacity : 0;
    
    // Dynamically update pen and cap positions
    var progress = (scrollPosition / (footerOffset - windowHeight));
    var penRotation = Math.min(180, progress * 360); // Full rotation at the start of the footer
    var capTranslation = Math.min(100, progress * 200); // Translate cap to 100px at the start of the footer

    // Closing effect when scrolling past the home section towards the footer
    if (scrollPosition > footerOffset) {
        var footerProgress = (scrollPosition - footerOffset) / footerHeight;
        penRotation = 180 - Math.min(180, footerProgress * 180); // Reverses the opening
        capTranslation = 100 - Math.min(100, footerProgress * 100); // Pulls the cap back
    }

    document.getElementById('pen').style.transform = `rotate(${penRotation}deg)`;
    document.getElementById('cap').style.transform = `translateX(${capTranslation}px)`;
});
/* parallax effect script here */
