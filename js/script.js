// Image Slider Configuration
const sliderConfig = {
    images: [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
    ],
    slideInterval: 5000, // 5 seconds
    fadeDuration: 800   // 0.8 seconds
};

// DOM Elements
const sliderImage = document.getElementById("slider-image");
let currentIndex = 0;
let slideInterval;

// Preload images for smoother transitions
function preloadImages() {
    sliderConfig.images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Show image with fade effect
function showImage(index) {
    // Wrap around if at ends
    currentIndex = (index + sliderConfig.images.length) % sliderConfig.images.length;
    
    // Fade out current image
    sliderImage.style.opacity = 0;
    
    // After fade out completes, change image and fade in
    setTimeout(() => {
        sliderImage.src = sliderConfig.images[currentIndex];
        sliderImage.style.opacity = 1;
    }, sliderConfig.fadeDuration / 2);
}

// Navigation functions
function nextImage() {
    showImage(currentIndex + 1);
    resetSlideTimer();
}

function prevImage() {
    showImage(currentIndex - 1);
    resetSlideTimer();
}

// Auto-slide functionality
function startSlideTimer() {
    slideInterval = setInterval(nextImage, sliderConfig.slideInterval);
}

function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

// Initialize slider
function initSlider() {
    preloadImages();
    sliderImage.style.transition = `opacity ${sliderConfig.fadeDuration / 1000}s ease-in-out`;
    startSlideTimer();
    
    // Set initial image
    sliderImage.src = sliderConfig.images[currentIndex];
    sliderImage.style.opacity = 1;
}

// Start the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlider);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});







// navbar responsive js coding

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    
    // Create Menu Toggle Button
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    navbar.appendChild(menuToggle);
  
    // Create Close Toggle Button
    const closeToggle = document.createElement("div");
    closeToggle.classList.add("close-toggle");
    closeToggle.innerHTML = '<i class="fa fa-times"></i>';
    navLinks.prepend(closeToggle);
  
    // Toggle Navigation
    menuToggle.addEventListener("click", function() {
      navLinks.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  
    closeToggle.addEventListener("click", function() {
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  
    // Close when clicking nav links
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  });













document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 480) {
        const items = document.querySelectorAll('.showroom-item');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const overlay = entry.target.querySelector('.overlay');
                if (overlay) {
                    if (entry.isIntersecting) {
                        overlay.classList.add('show');
                    } else {
                        overlay.classList.remove('show');
                    }
                }
            });
        }, {
            threshold: 0.6 // Adjust for sensitivity
        });

        items.forEach(item => observer.observe(item));
    }
});


