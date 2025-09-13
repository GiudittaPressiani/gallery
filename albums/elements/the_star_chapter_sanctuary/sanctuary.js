const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const colors = [
  "#d4dce9",
  "#94cafd",
  "#b0f3f0",
  "#677fad",
  "#fff6fb",
  "#eebee1",
  "#fe7dc1",
  "#deb7f6"
];

class Particle {
  constructor(type) {
    this.type = type; 
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    if (type === "circle") {
      this.size = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.6 + 0.2;
      this.alphaDirection = Math.random() < 0.5 ? 0.02 : -0.02; 
    } else {
      this.size = Math.random() * 3 + 2; 
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = 0.5; 
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.type === "circle") {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    } else {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.lineTo(this.size, 0);
      ctx.lineTo(0, this.size);
      ctx.lineTo(-this.size, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    ctx.restore();
  }

  update() {
    if (this.type === "circle") {

      this.alpha += this.alphaDirection;
      if (this.alpha > 1 || this.alpha < 0.2) {
        this.alphaDirection *= -1;
      }
    }
    this.draw();
  }
}

const particles = [];
const totalCircles = 180; // # particles
const totalDiamonds = 120; // # rombi

// particles
for (let i = 0; i < totalCircles; i++) {
  particles.push(new Particle("circle"));
}

//rombi
for (let i = 0; i < totalDiamonds; i++) {
  particles.push(new Particle("diamond"));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animate);
}

animate();
