// --- CAROUSEL ---
const track = document.getElementById("track");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;

function updateSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
  currentSlide = index;
}

setInterval(() => {
  let next = (currentSlide + 1) % 2;
  updateSlide(next);
}, 5000);
