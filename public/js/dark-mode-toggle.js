// --- DARK MODE TOGGLE ---
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = toggleBtn.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
  icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
