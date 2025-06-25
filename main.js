// Enhanced scroll animations
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${
      scrolled * 0.1
    }deg)`;
  });
});

// Add dynamic hover effects
document.querySelectorAll(".social-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.15)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Typing effect for the name
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  element.style.opacity = "1";
  element.style.transform = "translateX(0)";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect after page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    const nameElement = document.querySelector(".name");
    const originalText = nameElement.textContent;
    typeWriter(nameElement, originalText, 100);
  }, 1000);
});

// Add floating animation to social buttons
setInterval(() => {
  document.querySelectorAll(".social-btn").forEach((btn, index) => {
    setTimeout(() => {
      btn.style.animation = "pulse 0.6s ease-in-out";
      setTimeout(() => {
        btn.style.animation = "";
      }, 600);
    }, index * 100);
  });
}, 5000);

// Parallax effect for hero content
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
});





// SECOND ANIMATION HANDLING THE CONTENT UNDER ABOUT ME


// Scroll animation triggered only when scrolling down
function initFlexRowAnimation() {
  const container = document.getElementById("animatedContainer");
  const leftItems = container.querySelectorAll(".from-left");
  const rightItems = container.querySelectorAll(".from-right");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  let isAnimated = false;
  let lastScrollTop = 0;

  function checkScroll() {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const containerRect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";
    lastScrollTop = currentScrollTop;

    const triggerPoint = windowHeight * 0.85;
    const isInView =
      containerRect.top < triggerPoint && containerRect.bottom > 0;

    // Animate only when scrolling down into view and not already animated
    if (scrollDirection === "down" && isInView && !isAnimated) {
      animateItems();
      isAnimated = true;
      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }
    }
  }

  function animateItems() {
    leftItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate-in");
      }, index * 200);
    });

    rightItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate-in");
      }, index * 200);
    });
  }

  // Throttle scroll for performance
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);

  // Initial check in case container is already in view
  setTimeout(() => {
    checkScroll();
  }, 100);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFlexRowAnimation);
} else {
  initFlexRowAnimation();
}
