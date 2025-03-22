// Responsive Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle the display of nav-links
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Optional: If you want a more advanced approach, you can add a class
// navLinks.classList.toggle('active'); and define .active in CSS.

// Additional scripts can be added here if needed.
