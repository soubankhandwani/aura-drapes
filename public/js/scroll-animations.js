// --- SCROLL ANIMATIONS ---
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};
window.addEventListener("scroll", reveal);
reveal(); // Trigger on load
