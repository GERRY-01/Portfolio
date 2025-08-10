   const btn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      mobileMenu.classList.toggle("hidden");
    });

    AOS.init({
    duration: 1000, // animation duration
    once: true      // run animation only once
  });