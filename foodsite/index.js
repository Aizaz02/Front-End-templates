let btn = document.getElementById("cta-btn");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
  overlay.style.display = "grid";
  overlay.classList.add("animate-overlay");
});

document.addEventListener("scroll", () => {
  overlay.classList.remove("animate-overlay");
  overlay.style.display = " none";
});
