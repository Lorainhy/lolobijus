// Número do WhatsApp configurado
const SEU_NUMERO_WHATSAPP = "5568984053618"; 

// Lista dos 10 Acessórios
const produtos = [
  {
    nome: "Chaveiro Miçangas Ocean",
    desc: "Chaveiro artesanal em tons azuis e detalhes em estrela.",
    preco: "R$ 12,00",
    imagem: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"
  },
  {
    nome: "Pulseira Crystal Purple",
    desc: "Pulseira ajustável com pedras sintéticas lilás e roxas.",
    preco: "R$ 15,00",
    imagem: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
  },
  {
    nome: "Colar Estilo Choker Neon",
    desc: "Colar delicado com miçangas coloridas e pingente de coração.",
    preco: "R$ 18,00",
    imagem: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
  },
  {
    nome: "Chaveiro Signo / Nome",
    desc: "Chaveiro personalizado com letras e miçangas transparentes.",
    preco: "R$ 14,00",
    imagem: "https://images.unsplash.com/photo-1611591475194-46b5333f2b1c?w=400"
  },
  {
    nome: "Kit 2 Pulseiras Amizade",
    desc: "Par de pulseiras combinando para usar com o melhor amigo(a).",
    preco: "R$ 22,00",
    imagem: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400"
  },
  {
    nome: "Colar Pingente Borboleta",
    desc: "Colar prata com pingente de borboleta em gradiente lilás.",
    preco: "R$ 20,00",
    imagem: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400"
  },
  {
    nome: "Pulseira Reggae / Boho",
    desc: "Pulseira trançada à mão com fios e miçangas naturais.",
    preco: "R$ 10,00",
    imagem: "https://images.unsplash.com/photo-1611591475168-3c35b62b1093?w=400"
  },
  {
    nome: "Chaveiro Ursinho Acrílico",
    desc: "Chaveiro super fofo com urso translúcido e ganchinho colorido.",
    preco: "R$ 16,00",
    imagem: "https://images.unsplash.com/photo-1582142839970-2b9328443929?w=400"
  },
  {
    nome: "Colar Miçangas Y2K",
    desc: "Estilo retrô com miçangas variadas, carinhas sorridentes e pérolas.",
    preco: "R$ 25,00",
    imagem: "https://images.unsplash.com/photo-1611591475082-8c9e5162a8ed?w=400"
  },
  {
    nome: "Pulseira Minimalista Pérola",
    desc: "Pulseira delicada de pérolas sintéticas com fecho folheado.",
    preco: "R$ 16,00",
    imagem: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
  }
];

// Renderizar os cards dinamicamente
const container = document.getElementById('products-container');

if (container) {
  produtos.forEach(prod => {
    const mensagem = encodeURIComponent(`Olá! Quero este produto: *${prod.nome}* (${prod.preco})!`);
    const linkWhatsapp = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${mensagem}`;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}" class="product-img">
      <div class="product-info">
        <h3 class="product-title">${prod.nome}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-price">${prod.preco}</div>
        <a href="${linkWhatsapp}" target="_blank" class="btn-buy">
          <i class="fa-brands fa-whatsapp"></i> Quero este!
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}