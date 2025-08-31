// Funzione per creare una nuvola pixel random
function createCloudBlueHour() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud-bluehour");

  // posizione verticale random
  cloud.style.top = Math.random() * 80 + "vh";
  cloud.style.left = "-200px";

  // durata animazione random
  const duration = 50 + Math.random() * 50; // tra 50s e 100s
  cloud.style.animationDuration = duration + "s";

  // scala random (dimensione nuvola)
  const scale = 0.5 + Math.random() * 1.5;
  cloud.style.transform = `scale(${scale})`;

  // genera pixel (8x5 griglia)
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel-bluehour");

      // con probabilità, metti un colore oppure lasci vuoto
      if (Math.random() > 0.3) {
        const colors = ["c1-bluehour", "c2-bluehour", "c3-bluehour"];
        pixel.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      }

      cloud.appendChild(pixel);
    }
  }

  // aggiungi la nuvola solo se siamo nella pagina bluehour
  if(document.body.classList.contains("bluehour")) {
    document.body.appendChild(cloud);
    // rimuovi la nuvola quando finisce l’animazione
    setTimeout(() => cloud.remove(), duration * 1000);
  }
}

// Genera nuvole periodicamente
setInterval(createCloudBlueHour, 5000); // una nuova ogni 5s

// Avvio iniziale
for (let i = 0; i < 5; i++) createCloudBlueHour();
