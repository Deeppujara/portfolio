// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar Script ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Check if the elements exist before adding event listeners
  if (menuToggle && mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      });
    });
  }

  // --- Typewriter Script ---
  const typeElem = document.getElementById("typewriter-company");
  if (typeElem) {
    const company = "Skyworks Solutions";
    let letterIndex = 0;
    let typing = true;
    function typeCompanyLoop() {
      if (typing) {
        if (letterIndex <= company.length) {
          typeElem.innerHTML = `<span class="company-color">${company.slice(0, letterIndex++)}</span>`;
          setTimeout(typeCompanyLoop, 90);
        } else {
          typing = false;
          setTimeout(typeCompanyLoop, 1200);
        }
      } else {
        if (letterIndex > 0) {
          typeElem.innerHTML = `<span class="company-color">${company.slice(0, --letterIndex)}</span>`;
          setTimeout(typeCompanyLoop, 40);
        } else {
          typing = true;
          setTimeout(typeCompanyLoop, 500);
        }
      }
    }
    typeCompanyLoop();
  }

  // --- Python Skills Toggle Script ---
  const pythonSkillTrigger = document.getElementById("python-skill-trigger");
  const pythonPackagesCategory = document.getElementById("python-packages-category");
  if (pythonSkillTrigger && pythonPackagesCategory) {
    pythonSkillTrigger.addEventListener("click", () => {
      pythonPackagesCategory.classList.toggle("visible");
      pythonSkillTrigger.classList.toggle("expanded");
    });
  }

  // --- Education Slider Script ---
  const educationItems = document.querySelectorAll('.education-item');
  if (educationItems.length > 0) {
    const sliderNodes = document.querySelectorAll('.slider-node');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          educationItems.forEach(item => item.classList.remove('active'));
          sliderNodes.forEach(node => node.classList.remove('active'));
          entry.target.classList.add('active');
          const activeNode = document.querySelector(`.slider-node[data-target="${id}"]`);
          if (activeNode) {
            activeNode.classList.add('active');
          }
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    educationItems.forEach(item => { observer.observe(item); });
  }
});
