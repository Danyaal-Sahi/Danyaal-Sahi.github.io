
// Example of a JavaScript function for the portfolio website
function sendMessage() {
    // Imagine this function sends a message entered in the contact form
    alert('Your message has been sent!');
}

// Attaching the sendMessage function to form submit event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing the form from submitting the traditional way
    sendMessage();
});
