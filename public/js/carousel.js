// --- CAROUSEL ---
const track = document.getElementById("track");
const dots = document.querySelectorAll(".carousel-dot");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideCount = slides.length || 1;

function updateSlide(index) {
  const newIndex = ((index % slideCount) + slideCount) % slideCount; // safe wrap
  track.style.transform = `translateX(-${newIndex * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  if (dots[newIndex]) dots[newIndex].classList.add("active");
  currentSlide = newIndex;
}

function nextSlide() {
  updateSlide(currentSlide + 1);
}

function prevSlide() {
  updateSlide(currentSlide - 1);
}

// Auto-slide with reset capability
let autoSlideInterval = setInterval(() => {
  nextSlide();
}, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Hook arrow buttons if present
const nextBtn = document.querySelector(".carousel-next");
const prevBtn = document.querySelector(".carousel-prev");
if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoSlide(); });

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { nextSlide(); resetAutoSlide(); }
  if (e.key === "ArrowLeft") { prevSlide(); resetAutoSlide(); }
});

// Ensure starting slide state
updateSlide(0);
