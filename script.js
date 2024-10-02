
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

// good js 
window.addEventListener('scroll', function() {
    var logoContainer = document.querySelector('.logo-container');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // Logo fade effect
    var opacity;
    if (scrollY < windowHeight) {
        opacity = 1 - (scrollY / windowHeight * 0.6);
        logoContainer.style.opacity = Math.max(opacity, 0.4);
    } else {
        logoContainer.style.opacity = 0.4;
    }

    let home = document.getElementById('home');
    let footer = document.getElementById('footer');
    let pen = document.getElementById('pen');
    let cap = document.getElementById('cap');

    if (!home || !footer || !pen || !cap) {
        console.log("Required sections or elements not found, exiting curtain effect script.");
        return;
    }

    let homeRect = home.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    // Start transition slightly before reaching the home section
    let startTransition = homeRect.top - 100; // 100px before reaching home
    // End transition slightly after the footer is out of view
    let endTransition = footerRect.bottom + 100; // 100px after the footer

    // Calculate percentOpen based on current scroll position
    let percentOpen;
    if (scrollY < startTransition) {
        percentOpen = 0; // Fully closed
    } else if (scrollY > endTransition) {
        percentOpen = 1; // Fully open
    } else {
        // Scale percentOpen between startTransition and endTransition
        percentOpen = (scrollY - startTransition) / (endTransition - startTransition);
        percentOpen = Math.max(0, Math.min(1, percentOpen)); // Clamp value between 0 and 1
    }

    updateTransforms(percentOpen, pen, cap);
});

function updateTransforms(percentOpen, pen, cap) {
    const viewportWidth = window.innerWidth;
    let translateXPen, translateXCap;

    if (viewportWidth > 1200) {
        translateXPen = 120 * percentOpen;
        translateXCap = 110 * percentOpen;
    } else if (viewportWidth > 768) {
        translateXPen = 100 * percentOpen;
        translateXCap = 90 * percentOpen;
    } else {
        translateXPen = 90 * percentOpen;
        translateXCap = 80 * percentOpen;
    }

    pen.style.transform = `translateX(${translateXPen}%)`;
    cap.style.transform = `translateX(-${translateXCap}%)`;
}
