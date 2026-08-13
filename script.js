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

  const form=e.currentTarget;
  const id='PED-'+String(Date.now()).slice(-4);
  const dados=new FormData(form);

  let mensagem=`━━━━━━━━━━━━━━━━
📋 PEDIDO #${id.replace('PED-','')}
━━━━━━━━━━━━━━━━

`;

  for(const [chave,valor] of dados.entries()){
    if(valor instanceof File){
      if(valor.name) mensagem+=`📎 ARQUIVO: ${valor.name}\n`;
    }else if(valor){
      mensagem+=`${chave.toUpperCase()}: ${valor}\n`;
    }
  }

  mensagem+=`
📌 STATUS:
🔵 Novo

━━━━━━━━━━━━━━━━`;

  const whatsapp='5535999927517';
  const url=`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url,'_blank');
});
