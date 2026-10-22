const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=menu.getAttribute('aria-expanded')==='true';closeMenu();if(open)menu.focus();}});
const form=document.querySelector('form');const intent=document.querySelector('#intent');const vehicle=document.querySelector('#vehicle');const preview=document.querySelector('#message-preview');
function message(){const purpose=intent.value==='Tirar uma dúvida'?'tirar uma dúvida sobre seguro automotivo':`conversar sobre ${intent.value.toLocaleLowerCase('pt-BR')} de seguro automotivo`;const usage=form.querySelector('input[name="usage"]:checked').value.toLocaleLowerCase('pt-BR');return `Olá, Matheus! Gostaria de ${purpose}.${vehicle.value.trim()?` Veículo: ${vehicle.value.trim()}.`:''} Uso do carro: ${usage}.`;}
function update(){preview.textContent=message();}
form.addEventListener('input',update);form.addEventListener('change',update);
form.addEventListener('submit',e=>{e.preventDefault();window.open('https://wa.me/5521994690945?text='+encodeURIComponent(message()),'_blank','noopener');});
document.querySelectorAll('[data-intent]').forEach(button=>button.addEventListener('click',()=>{intent.value=button.dataset.intent;update();document.querySelector('#cotacao').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});intent.focus({preventScroll:true});}));
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('is-paused',document.hidden));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('[data-reveal]').forEach((element,i)=>{element.style.setProperty('--delay',`${i%3*70}ms`);element.classList.add('pending');observer.observe(element);});}
