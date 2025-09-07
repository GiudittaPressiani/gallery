/* === SCRIPT PARTICELLE === */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

class Particle {
  constructor(x, y, size, speedX, speedY){
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) this.size -= 0.01;
  }
  draw(){
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init(){
  particlesArray = [];
  for(let i = 0; i < 100; i++){
    let size = Math.random() * 3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 0.5;
    let speedY = (Math.random() - 0.5) * 0.5;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(let i = 0; i < particlesArray.length; i++){
    let p = particlesArray[i];
    p.update();
    p.draw();
    if(p.size <= 0.2){
      particlesArray[i] = new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 3 + 1,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );
    }
  }
  requestAnimationFrame(animate);
}

init();
animate();
