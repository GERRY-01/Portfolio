   const btn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      mobileMenu.classList.toggle("hidden");
    });