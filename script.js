<script>
  // Wait for the document to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Function to toggle the menu
    function toggleMenu() {
      mobileMenu.classList.toggle('active');
    }

    // Event listener for the hamburger icon click
    menuToggle.addEventListener('click', toggleMenu);

    // Add event listeners to each link in the mobile menu
    // This makes the menu close automatically when a link is clicked
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Check if the menu is open before closing it
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      });
    });
  });
</script>
