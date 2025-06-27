// Include EmailJS in your project (if using a CDN)
//  <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     emailjs.init("YOUR_USER_ID"); // Initialize EmailJS

//     const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
//         .then(response => {
//             alert("Message sent successfully!");
//             document.getElementById("contact-form").reset();
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             alert("Failed to send message. Please try again later.");
//         });
// });


// import 'boxicons'



// This code is for mail send when user send email to me through the feedback form
function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_sda8nwv", "template_t30nt8k", params)
        .then(function(response) {
            alert("Email Sent Successfully!");
            document.getElementById("contact-form").reset(); // Clears the form after sending
        })
        .catch(function(error) {
            console.error("Error:", error);
            alert("Failed to send email. Please try again later.");
        });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from reloading the page
    sendMail(); // Calls the function to send email
});


