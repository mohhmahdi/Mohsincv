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
