// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    const full = btn.getAttribute("data-full");
    if (!full) return;
    lightboxImg.src = full;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox) return;
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
