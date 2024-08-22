// JavaScript for form handling 

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
