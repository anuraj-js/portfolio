//Type effect
document.addEventListener("DOMContentLoaded", () => {
  const text = "Frontend Developer";
  const typedText = document.getElementById("typed-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();
});

//Theme Toggle
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme === "light") {
  body.classList.add("light-mode");
  themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
});

//sidebar
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const overlay = document.querySelector(".overlay");
const sidebarLinks = document.querySelectorAll(".sidebar a");

function closeSideBar() {
  menuIcon.style.visibility = "visible";
  sidebar.classList.remove("active");
  overlay.style.display = "none";
  document.body.style.overflowY = "auto";
}

menuIcon.addEventListener("click", () => {
  menuIcon.style.visibility = "hidden";
  sidebar.classList.add("active");
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
});

closeMenuIcon.addEventListener("click", closeSideBar);

overlay.addEventListener("click", closeSideBar);

for (let i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener("click", closeSideBar);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
  closeSideBar();
  }
});

//scrollup

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    document.querySelector(".scrollup").classList.add("active");
  } else {
    document.querySelector(".scrollup").classList.remove("active");
  }
});

// ========== VIDEO MODAL ==========
const videoModal = document.getElementById("videoModal");
const videoClose = document.getElementById("videoClose");
const modalVideo = document.getElementById("modalVideo");
const playOverlays = document.querySelectorAll(".play-overlay");
const videoTabs = document.querySelectorAll(".video-tab");

function openVideoModal() {
  videoModal.classList.add("active");
  document.body.style.overflowY = "hidden";
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  document.body.style.overflowY = "auto";
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

playOverlays.forEach((btn) => {
  btn.addEventListener("click", openVideoModal);
});

videoClose.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("active")) {
    closeVideoModal();
  }
});

videoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const newSrc = tab.getAttribute("data-video");

    videoTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    modalVideo.pause();
    modalVideo.querySelector("source").setAttribute("src", newSrc);
    modalVideo.load();
    modalVideo.play().catch(() => {});
  });
});