document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = parseInt(document.getElementById('guests').value);
    const message = document.getElementById('message').value.trim();

    // Validate number of guests (must be between 1 and 10)
    const guestError = document.getElementById('guestError');
    if (guests < 1 || guests > 10) {
        guestError.textContent = 'Number of guests must be between 1 and 10.';
        return;
    } else {
        guestError.textContent = '';
    }

    // Example success condition: If the user enters a name and guests number
    if (name && email && phone && date && time && guests) {
        // Hide form and show success message
        document.getElementById('bookingForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';

        // Log the data (in a real-world app, you'd send this data to a server)
        console.log({
            name,
            email,
            phone,
            date,
            time,
            guests,
            message
        });
    } else {
        alert('Please fill out all the required fields!');
    }
});
