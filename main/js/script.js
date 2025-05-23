document.getElementById('openPageButton').addEventListener('click', function() {
    window.location.href = 'table/index.html';  // Redirect to the second page in the folder
});
// JavaScript to handle the WhatsApp button click
document.getElementById('whatsappButton').addEventListener('click', function() {
    var phoneNumber = '6381608230'; // Replace with the WhatsApp phone number
    var message = 'Hello, I have a question!'; // Optional message to pre-fill
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Opens WhatsApp or WhatsApp Web in a new tab
});
