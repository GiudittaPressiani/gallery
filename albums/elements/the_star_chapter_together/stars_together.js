const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// blue gradient
function drawBackground() {
  const gradient = ctx.createLinearGradient(0,0,0,canvas.height);
  gradient.addColorStop(0, '#1036f3');
  gradient.addColorStop(0.5, '#1973f8');
  gradient.addColorStop(1, '#1036f3');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

// free stars
const stars = [];
const starCount = 150;
const starColors = ['#ffffff','#7be1f9','#bfe4f8'];

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    color: starColors[Math.floor(Math.random() * starColors.length)],
    opacity: Math.random(),
    delta: Math.random() * 0.02 + 0.01
  });
}

// Constellations
const constellationStars = [];
const constellationCount = 80;

for (let i = 0; i < constellationCount; i++) {
  constellationStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1
  });
}

function draw() {
  drawBackground();

  //lines for constellation
  ctx.strokeStyle = '#7be1f9';
  ctx.lineWidth = 0.5;
  for(let i=0;i<constellationStars.length;i++){
    for(let j=i+1;j<constellationStars.length;j++){
      const dx = constellationStars[i].x - constellationStars[j].x;
      const dy = constellationStars[i].y - constellationStars[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        ctx.beginPath();
        ctx.moveTo(constellationStars[i].x, constellationStars[i].y);
        ctx.lineTo(constellationStars[j].x, constellationStars[j].y);
        ctx.stroke();
      }
    }
  }

  //free stars
  for(let star of stars){
    star.opacity += star.delta;
    if(star.opacity > 1 || star.opacity < 0.2) star.delta *= -1;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(${parseInt(star.color.slice(1,3),16)},${parseInt(star.color.slice(3,5),16)},${parseInt(star.color.slice(5,7),16)},${star.opacity})`;
    ctx.fill();
  }

  //stars for constellation
  for(let star of constellationStars){
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
    ctx.fillStyle = '#7be1f9';
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();

// Resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
