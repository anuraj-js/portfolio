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