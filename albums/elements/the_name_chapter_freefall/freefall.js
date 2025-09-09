// ================== DROPS ==================
const rainContainer = document.getElementById('rain');
const dropsCount = 200;

for (let i = 0; i < dropsCount; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  
  drop.style.left = Math.random() * 100 + 'vw';
  const height = 10 + Math.random() * 20;
  drop.style.height = height + 'px';
  
  const duration = 0.5 + Math.random() * 1;
  drop.style.animationDuration = duration + 's';
  
  drop.style.background = `rgba(235,236,230,${0.2 + Math.random()*0.3})`;
  drop.style.filter = `blur(${0.3 + Math.random()*0.7}px)`;
  
  rainContainer.appendChild(drop);
}

// ================== NEON LIGHTS ==================
const neonCount = 40;
for(let i=0;i<neonCount;i++){
  const neon = document.createElement('div');
  neon.classList.add('neon');
  if(Math.random() < 0.3) neon.classList.add('sand'); // 30% sand
  
  neon.style.left = Math.random()*100 + 'vw';
  neon.style.top = Math.random()*100 + 'vh';
  neon.style.width = 4 + Math.random()*4 + 'px';
  neon.style.height = neon.style.width;
  neon.style.animationDuration = (1 + Math.random()*2) + 's';
  document.body.appendChild(neon);
}
