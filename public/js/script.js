//---------------------- dark and light mode script----------------------//

let themeLink = document.querySelector("#theme");
let modeButton = document.querySelector("#mode");
className = "bx";

modeButton.addEventListener("click", (e) => {
  let currentTheme = themeLink.getAttribute("href");

  if (currentTheme === "public/css/style.css") {
    modeButton.className = "bx bxs-moon";
    themeLink.setAttribute("href", "public/css/style-1.css");
  } else {
    modeButton.className = "bx bxs-sun";
    themeLink.setAttribute("href", "public/css/style.css");
  }
});


//---------------------- button hover an click script ----------------------//

let navButtons = document.querySelectorAll(".my-nav a");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", (e) => {
    for (let j = 0; j < navButtons.length; j++) {
      let exists = navButtons[j].getAttribute("class");
      if (exists === "active") {
        navButtons[j].classList.toggle("active");
      }
    }
    navButtons[i].classList.toggle("active");
  });
}

//---------------------- Scroll script ----------------------//

let viewportHeight = window.innerHeight;
let gapElements = document.querySelectorAll(".gap");

window.addEventListener("scroll", function () {
  gapElements.forEach((divPosition, index) => {
    let rect = divPosition.getBoundingClientRect();
    let gap = rect.top;

    // Check if the div is close to the bottom of the viewport
    if (gap < viewportHeight) {
      // Adjust the percentage as needed
      navButtons.forEach((element, j) => {
        let exists = element.classList.contains("active");
        if (exists) {
          navButtons[j].classList.remove("active");
        }
      });
      navButtons[index].classList.add("active");
    } else {
      navButtons[index].classList.remove("active");
    }
  });
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});


//---------------------- responsive navbar script ----------------------//

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".my-nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Multiple Text
const typed = new Typed(".multiple-text", {
  strings: ["Student", "Full-Stack Developer", "Gamer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

//---------------------- circle skill ----------------------//

const circles = document.querySelectorAll(".circle");

circles.forEach((element) => {
  let dots = element.getAttribute("data-dots");
  let marked = element.getAttribute("data-percent");

  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  element.innerHTML = points;

  const pointsMarked = element.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

//---------------------- Scroll reveal ----------------------//

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: `top` });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact form",
  { origin: `bottom` }
);
ScrollReveal().reveal(".home-content h1, .about-image, .skill-left", {
  origin: `left`,
});
ScrollReveal().reveal(
  ".home-content p, .about-content h3, .skill-right, .about-content p",
  { origin: `right` }
);
