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

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector("#lightbox .close");
const nextBtn = document.querySelector("#lightbox .next");
const prevBtn = document.querySelector("#lightbox .prev");

if (galleryItems.length && lightbox && lightboxImg && closeBtn && nextBtn && prevBtn) {
  const sources = Array.from(galleryItems).map((btn) => btn.dataset.full || btn.querySelector("img")?.src);
  let currentIndex = 0;

  function openAt(index) {
    currentIndex = index;
    lightboxImg.src = sources[currentIndex];
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function next() {
    currentIndex = (currentIndex + 1) % sources.length;
    lightboxImg.src = sources[currentIndex];
  }

  function prev() {
    currentIndex = (currentIndex - 1 + sources.length) % sources.length;
    lightboxImg.src = sources[currentIndex];
  }

  galleryItems.forEach((btn, index) => {
    btn.addEventListener("click", () => openAt(index));
  });


nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    next();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prev();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    close();
  });

 // click outside image closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

 // keyboard controls
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}
