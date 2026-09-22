// Número do WhatsApp
const SEU_NUMERO_WHATSAPP = "5568984053618";

// PRODUTOS DA LOLO BIJUS
const produtos = [
    {
        id: 1,
        titulo: "colar regulavel",
        preco: "R$ 10,00",
        imagem: "img/colar.jpg"
    },

    {
        id: 2,
        titulo: "Pulseira Colorida",
        descricao: "Pulseira artesanal com miçangas coloridas.",
        preco: "R$ 12,00",
        imagem: "imagens/pulseira2.jpg"
    },

    {
        id: 3,
        titulo: "Colar Delicado",
        descricao: "Colar feito à mão com detalhes delicados.",
        preco: "R$ 15,00",
        imagem: "imagens/colar1.jpg"
    },

    {
        id: 4,
        titulo: "Chaveiro Personalizado",
        descricao: "Chaveiro artesanal que pode ser personalizado.",
        preco: "R$ 12,00",
        imagem: "imagens/chaveiro1.jpg"
    }
];


// LOCAL ONDE OS PRODUTOS VÃO APARECER
const container = document.getElementById("products-container");


// CRIAR OS PRODUTOS NA PÁGINA
if (container) {

    produtos.forEach(produto => {

        const mensagem = encodeURIComponent(
            `Olá! Quero este produto: *${produto.titulo}* - ${produto.preco}`
        );

        const linkWhatsapp =
            `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${mensagem}`;

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img 
                src="${produto.imagem}" 
                alt="${produto.titulo}" 
                class="product-img"
            >

            <div class="product-info">

                <h3 class="product-title">
                    ${produto.titulo}
                </h3>

                <p class="product-desc">
                    ${produto.descricao}
                </p>

                <div class="product-price">
                    ${produto.preco}
                </div>

                <a 
                    href="${linkWhatsapp}" 
                    target="_blank" 
                    class="btn-buy"
                >
                    <i class="fa-brands fa-whatsapp"></i>
                    Quero este!
                </a>

            </div>
        `;

        container.appendChild(card);
    });
}
