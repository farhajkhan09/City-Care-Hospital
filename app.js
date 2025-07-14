// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Appointment Form Submission
document.getElementById('appointmentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;

    if (name && email && phone && department && doctor && date) {
        alert('Appointment booked for ' + name + ' with ' + doctor + ' on ' + date + '.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});