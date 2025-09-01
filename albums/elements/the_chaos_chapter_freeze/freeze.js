/* ---- Cristalli colorati con luce pulsante ---- */
const canvasFreeze = document.getElementById('crystals-freeze');
const ctxFreeze = canvasFreeze.getContext('2d');
canvasFreeze.width = window.innerWidth;
canvasFreeze.height = window.innerHeight;

class CrystalFreeze {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvasFreeze.width;
    this.y = Math.random() * canvasFreeze.height;
    this.r = Math.random() * 2 + 1.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.baseOpacity = Math.random() * 0.5 + 0.3;
    this.opacity = this.baseOpacity;
    this.pulseSpeed = Math.random() * 0.05 + 0.02;
    this.color = Math.random() < 0.6 ? '224,247,255' : '160,216,255';
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulseSpeed) * 0.3;
    if(this.opacity>1) this.opacity=1;
    if(this.opacity<0.2) this.opacity=0.2;
    if (this.y > canvasFreeze.height) this.y = 0;
    if (this.x > canvasFreeze.width) this.x = 0;
    if (this.x < 0) this.x = canvasFreeze.width;
  }
  draw() {
    ctxFreeze.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctxFreeze.beginPath();
    ctxFreeze.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctxFreeze.fill();
  }
}

const crystalsFreeze = [];
for(let i=0;i<200;i++) crystalsFreeze.push(new CrystalFreeze());

function animateCrystalsFreeze() {
  ctxFreeze.clearRect(0,0,canvasFreeze.width,canvasFreeze.height);
  crystalsFreeze.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animateCrystalsFreeze);
}

animateCrystalsFreeze();

/* ---- Fratture ghiaccio statiche ---- */
const cracksCanvasFreeze = document.getElementById('cracks-freeze');
const cctxFreeze = cracksCanvasFreeze.getContext('2d');
cracksCanvasFreeze.width = window.innerWidth;
cracksCanvasFreeze.height = window.innerHeight;

for(let i=0;i<40;i++){
  let x1 = Math.random()*canvasFreeze.width;
  let y1 = Math.random()*canvasFreeze.height;
  let x2 = x1 + (Math.random()*200-100);
  let y2 = y1 + (Math.random()*200-100);
  
  cctxFreeze.strokeStyle = 'rgba(224,247,255,0.4)';
  cctxFreeze.lineWidth = 1 + Math.random()*2;
  cctxFreeze.beginPath();
  cctxFreeze.moveTo(x1,y1);
  cctxFreeze.lineTo(x2,y2);
  cctxFreeze.stroke();
}

/* ---- Resize ---- */
window.addEventListener('resize', () => {
  canvasFreeze.width = window.innerWidth;
  canvasFreeze.height = window.innerHeight;
  cracksCanvasFreeze.width = window.innerWidth;
  cracksCanvasFreeze.height = window.innerHeight;
});
