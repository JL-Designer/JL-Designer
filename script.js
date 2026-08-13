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

  const nome=form.elements.nome.value;
  const whatsapp=form.elements.whatsapp.value;
  const email=form.elements.email.value;
  const servico=form.elements.servico.value;
  const prazo=form.elements.prazo.value;
  const descricao=form.elements.descricao.value;

  const mensagem=`━━━━━━━━━━━━━━━━
📋 PEDIDO #${id.replace('PED-','')}
━━━━━━━━━━━━━━━━

👤 CLIENTE:
${nome}

📱 WHATSAPP:
${whatsapp}

📧 E-MAIL:
${email}

🎨 SERVIÇO:
${servico}

📅 PRAZO:
${prazo || 'Não informado'}

📝 DESCRIÇÃO:
${descricao}

💰 VALOR:
A definir

💳 PAGAMENTO:
Pendente

📌 STATUS:
🔵 Novo

━━━━━━━━━━━━━━━━`;

  const numero='5535999927517';
  const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url,'_blank');
});
