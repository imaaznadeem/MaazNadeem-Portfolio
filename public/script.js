// Loader
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.querySelector(".loader").style.opacity = "0";
          setTimeout(() => {
            document.querySelector(".loader").style.display = "none";
          }, 500);
        }, 3000);
      });

      // Theme Toggle
      const themeToggle = document.querySelector(".theme-toggle");
      const body = document.body;
      let isDark = true;

      themeToggle.addEventListener("click", () => {
        isDark = !isDark;
        body.setAttribute("data-theme", isDark ? "dark" : "light");
        themeToggle.innerHTML = isDark
          ? '<i class="fas fa-moon"></i>'
          : '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });

      // Initialize theme
      const savedTheme = localStorage.getItem("theme") || "dark";
      body.setAttribute("data-theme", savedTheme);
      isDark = savedTheme === "dark";
      themeToggle.innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
         // Particles
      particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#00ff88" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { speed: 2 },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
          },
        },
      });

      // Scroll Animations
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((section) => observer.observe(section));

      // Skills Animation
      const skillObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBar = entry.target;
              progressBar.style.width = progressBar.dataset.width;
              progressBar.classList.add("animated");
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll(".skill-progress").forEach((progress) => {
        skillObserver.observe(progress);
      });
      
      // Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Scroll to top on refresh
      window.onload = function () {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      };

      // Project Card Animations
      const projectCards = document.querySelectorAll(".project-card");
      const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      projectCards.forEach((card) => {
        projectObserver.observe(card);
      });
      
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");

      // Show button on scroll
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollToTopBtn.style.display = "flex";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      });

      // Scroll to top on click
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      
      // Hamburger Menu Toggle
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close menu on click for mobile
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navLinks.classList.remove("active");
          }
        });
      });
      
      // Certificate Modal Functionality
      const certificateItems = document.querySelectorAll("[data-certificate]");
      const certificateModal = document.querySelector(".certificate-modal");
      const certificateImage = document.querySelector(".certificate-image");
      const closeModal = document.querySelector(".close-modal");

      certificateItems.forEach((item) => {
        item.addEventListener("click", () => {
          certificateModal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });

      closeModal.addEventListener("click", () => {
        certificateModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });

      certificateModal.addEventListener("click", (e) => {
        if (e.target === certificateModal) {
          certificateModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
      
      let lastScroll = 0;
      const navbar = document.querySelector(".navbar");
      const scrollThreshold = 10;
      const mobileMenuBreakpoint = 768;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (
          window.innerWidth <= mobileMenuBreakpoint &&
          navbar.classList.contains("active")
        )
          return;
        if (currentScroll <= 10) return navbar.classList.add("top");

        if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

        if (currentScroll > lastScroll) {
          navbar.classList.remove("visible", "top");
          navbar.classList.add("hidden");
        } else {
          navbar.classList.remove("hidden");
          navbar.classList.add("visible");
        }

        lastScroll = currentScroll;
      });

      // Close modal with ESC key
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          certificateModal.classList.contains("active")
        ) {
          certificateModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
      
      function initScrollProgress() {
        const progressBar = document.createElement("div");
        progressBar.className = "scroll-progress";
        document.body.prepend(progressBar);

        window.addEventListener("scroll", () => {
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = (window.scrollY / windowHeight) * 100;
          progressBar.style.width = scrolled + "%";
        });
      }

      initScrollProgress();