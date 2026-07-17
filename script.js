const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.site-nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const frame=document.getElementById('hubFrame');
const loading=document.getElementById('appLoading');
if(frame&&loading){
  frame.addEventListener('load',()=>loading.classList.add('hidden'));
  setTimeout(()=>loading.classList.add('hidden'),7000);
}
document.getElementById('refreshApp')?.addEventListener('click',()=>{
  if(frame){loading?.classList.remove('hidden');frame.src=frame.src;}
});
document.getElementById('fullscreenApp')?.addEventListener('click',async()=>{
  const shell=document.getElementById('appShell');
  try{
    if(!document.fullscreenElement){await shell.requestFullscreen();}
    else{await document.exitFullscreen();}
  }catch(error){console.warn('Fullscreen is unavailable.',error);}
});
