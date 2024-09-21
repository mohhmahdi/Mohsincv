document.querySelector('.contact-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Your message has been sent!');
});
document.querySelector('.whatsapp-chat-icon').addEventListener('click', () => {
  document.querySelector('.whatsapp-chat-container').style.display = 'block';
});

document.querySelector('.whatsapp-chat-container').addEventListener('click', (e) => {
  if (e.target.closest('.whatsapp-chat-icon') === null) {
    document.querySelector('.whatsapp-chat-container').style.display = 'none';
  }
});

   const menuToggle = document.querySelector('.menu-toggle');
   const navLinks = document.querySelector('.nav-links');

   menuToggle.addEventListener('click', () => {
       navLinks.classList.toggle('show');
       const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
       menuToggle.setAttribute('aria-expanded', !expanded);
   });

document.getElementById('download-cv').onclick = function() {
    window.location.href = '/images/Mohsin_Mahdi_CV-H.pdf'; // Replace with the actual path to your CV
};
