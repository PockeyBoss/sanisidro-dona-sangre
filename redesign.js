document.addEventListener('DOMContentLoaded',()=>{
  document.body.classList.add('redesign');
  const logoSvg='assets/logo-cruz-roja-san-isidro.svg';
  document.querySelectorAll('.official-logo').forEach(el=>{
    el.innerHTML=`<img src="${logoSvg}" alt="Cruz Roja Argentina Filial San Isidro">`;
  });
  const heroLabel=document.querySelector('.hero-label');
  const heroTitle=document.querySelector('.hero h1');
  const heroCopy=document.querySelector('.hero-description');
  if(heroLabel) heroLabel.textContent='DONAR SANGRE SALVA VIDAS';
  if(heroTitle) heroTitle.innerHTML='Tu sangre puede<br><span>hacer la diferencia.</span>';
  if(heroCopy) heroCopy.textContent='Sumate a la comunidad de donantes voluntarios de la Cruz Roja Argentina Filial San Isidro.';
  const actions=document.querySelector('.buttons');
  if(actions){
    const first=actions.querySelector('.btn-primary');
    const second=actions.querySelector('.btn-outline');
    if(first){first.textContent='Reservar turno';}
    if(second){second.textContent='Consultar por WhatsApp';second.href='https://wa.me/541147437487';second.target='_blank';}
  }
  const heroVisual=document.querySelector('.hero-visual');
  if(heroVisual){
    heroVisual.innerHTML=`<div class="hero-panel"><div class="hero-cross"></div><div class="hero-panel-text"></div></div>`;
  }
  const benefits=document.createElement('div');
  benefits.className='redesign-benefits container-fluid';
  benefits.innerHTML=`
    <div class="redesign-benefit"><div class="rb-icon"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M20 5l-8 8-3-3"/></svg></div><div><h3>Donación segura</h3><p>Proceso controlado y seguro para todos.</p></div></div>
    <div class="redesign-benefit"><div class="rb-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="18" cy="9" r="2"/><path d="M15.5 14.5c1.5.6 2.5 2 2.5 3.5"/></svg></div><div><h3>Ayudás a muchos</h3><p>Tu donación puede ayudar a hasta 4 personas.</p></div></div>
    <div class="redesign-benefit"><div class="rb-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 3v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3z"/><path d="M8 12l2.5 2.5L16 9"/></svg></div><div><h3>Confidencial</h3><p>Tus datos están protegidos y son confidenciales.</p></div></div>
    <div class="redesign-benefit"><div class="rb-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><div><h3>Rápido y sencillo</h3><p>Todo el proceso toma aproximadamente 45 min.</p></div></div>`;
  const hero=document.querySelector('.hero');
  if(hero) hero.insertAdjacentElement('afterend',benefits);
  const campaign=document.querySelector('.campaign-wrap');
  if(campaign) campaign.style.display='none';
});