
// code for smooth scrolling of nav options

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Get the target section's ID
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section with smooth scrolling and a slower duration
    window.scrollTo({
      top: targetSection.offsetTop, // Position of the section
      behavior: "smooth" // Smooth scrolling
    });

    // Optional: Use JavaScript for additional timing
    const scrollDuration = 1500; // Duration in milliseconds (adjust this for slower scrolling)
    setTimeout(() => {
      console.log("Reached the section:", targetId); // Optional log
    }, scrollDuration);
  });
});



// for image on the navbar to be displayed in circle after clicking
const profileIcon = document.getElementById("profile-icon");
const modal = document.getElementById("image-modal");

// Open modal when profile icon is clicked
profileIcon.addEventListener("click", () => {
  modal.classList.add("show");
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});




// This code is for resume should display in the middle of the page and on the same page as the landing page
document.getElementById('resumeBtn').addEventListener('click', function () {
  const overlay = document.getElementById('resumeOverlay');
  const iframe = document.getElementById('iframeResume');

  // Set the source of the iframe to your resume file
  iframe.src = 'Resume.pdf';  // Replace with your actual PDF path

  // Display the overlay
  overlay.style.display = 'flex';
});

// Close the overlay when the close button is clicked
document.getElementById('closeBtn').addEventListener('click', function () {
  const overlay = document.getElementById('resumeOverlay');
  const iframe = document.getElementById('iframeResume');

  // Hide the overlay
  overlay.style.display = 'none';

  // Remove the src to stop loading when closed
  iframe.src = '';
});




