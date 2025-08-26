const NUM_STARS_MAGIC = 120; // quante stelle vuoi

const containerMagic = document.querySelector(".star-magic-stars");

for (let i = 0; i < NUM_STARS_MAGIC; i++) {
  const star = document.createElement("span");
  star.classList.add("star-magic");

  // posizione casuale
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  // dimensione casuale
  const size = Math.random() * 3 + 1; // da 1 a 4px
  star.style.width = size + "px";
  star.style.height = size + "px";

  // colore casuale
  const colors = [
    "var(--star-magic-green)",
    "var(--star-magic-blue)",
    "var(--star-magic-accent)"
  ];
  star.style.background = colors[Math.floor(Math.random() * colors.length)];

  // animazione sfalsata
  star.style.animationDelay = (Math.random() * 5) + "s";

  containerMagic.appendChild(star);
}
