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

  const nome=form.querySelector('[name="nome"]').value;
const whatsapp=form.querySelector('[name="whatsapp"]').value;
const email=form.querySelector('[name="email"]').value;
const servico=form.querySelector('[name="servico"]').value;
const prazo=form.querySelector('[name="prazo"]').value || 'Não informado';
const descricao=form.querySelector('[name="descricao"]').value;

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
${prazo}

📝 DESCRIÇÃO:
${descricao}

💰 VALOR:
A definir

💳 PAGAMENTO:
Pendente

📌 STATUS:
🔵 Novo

━━━━━━━━━━━━━━━━`;

  const numero='553599927517';
  const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.location.href=url;
});
