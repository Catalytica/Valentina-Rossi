const title = document.getElementById("mainTitle");
const content = document.getElementById("contentArea");

// State 1: First Click
title.addEventListener("click", () => {
  title.innerText = "Would you like to be entertained by a pick up line? Curated to charm your heart.";
  
  content.innerHTML = `
    <button onclick="goToPirate()">Yes.</button>
    <button onclick="goToPirate()">YES</button>
  `;
}, { once: true });

function goToPirate() {
  title.innerText = "Can I be your Pirate?";
  
  content.innerHTML = `
    <button onclick="finalLine()">Yes.</button>
    <button onclick="finalLine()">YAASSS QUEENNNN</button>
  `;
}

function finalLine() {
  title.innerText = "bEcAUsE I wAnT To tREaSurE yOuR cHEsT & bOOty";
  content.innerHTML = "";
}

/* Simple Animated Starfield Background */

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
