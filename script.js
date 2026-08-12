const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter'), items=document.querySelectorAll('.portfolio-item');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  items.forEach(item=>item.style.display=(f==='all'||item.dataset.category===f)?'flex':'none');
}));

document.getElementById('quoteForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const id='PED-'+String(Date.now()).slice(-4);
  alert(`Pedido enviado com sucesso! 🚀\n\nNúmero do pedido: ${id}\n\nNesta primeira versão, o formulário é apenas demonstrativo. Depois podemos conectar ao WhatsApp, e-mail ou banco de dados.`);
});
