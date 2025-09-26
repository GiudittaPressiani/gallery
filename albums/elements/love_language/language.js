const bubblesContainer = document.getElementById('bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Dimensioni più piccole per più bolle
  const size = 10 + Math.random() * 30; 
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  // Posizione casuale in tutta la schermata
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.top = Math.random() * 100 + 'vh';

  // Durata e delay casuali
  const duration = 6 + Math.random() * 8; 
  const delay = Math.random() * 5;
  bubble.style.animationDuration = duration + 's';
  bubble.style.animationDelay = delay + 's';

  bubblesContainer.appendChild(bubble);

  // Rimuove la bolla dopo l'animazione
  setTimeout(() => {
    bubblesContainer.removeChild(bubble);
  }, (duration + delay) * 1000);
}

// Crea più bolle più rapidamente
setInterval(createBubble, 100);
