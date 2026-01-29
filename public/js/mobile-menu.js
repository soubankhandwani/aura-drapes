// --- MOBILE MENU LOGIC ---
const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");
const links = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  // Toggle Menu Visibility
  navLinks.classList.toggle("active");

  // Rotate and Transform Icon
  if (navLinks.classList.contains("active")) {
    menuBtn.style.transform = "rotate(90deg)";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuBtn.style.transform = "rotate(0deg)";
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Close menu when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    // Reset Icon
    menuBtn.style.transform = "rotate(0deg)";
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});
