// Dados dos produtos (substituindo o JSON)
const cofres = [
    {
        id: 1,
        name: "Cofre Digital Residencial",
        description: "Cofre com fechadura eletrônica e backup mecânico. Ideal para residências pequenas e médias.",
        img: './assets/img/safe_01.jpeg'
    },
    {
        id: 2,
        name: "Cofre de Alta Segurança",
        description: "Cofre blindado com certificação internacional. Proteção máxima para bens de alto valor.",
        img: "./assets/img/safe_02.jpeg"
    },
    {
        id: 3,
        name: "Cofre Biométrico",
        description: "Tecnologia de reconhecimento de impressão digital para máxima segurança e praticidade.",
        img: "./assets/img/safe_03.jpeg"
    },

    {
        id: 4,
        name: "Caixa Forte",
        description: "Soluções ideais para residências e empresas que exigem proteção balística com design moderno e robusto.",
        img: './assets/img/safe_04.jpeg'
    },
    {
        id: 5,
        name: "Porta Forte",
        description: "Soluções ideais para residências e empresas que exigem proteção balística com design moderno e robusto.",
        img: "./assets/img/safe_05.jpeg"
    }
];

// Função para criar os cards
function renderProducts() {
    const container = document.getElementById('products-container');

    cofres.forEach(cofre => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
                    <div class="card-image">
                        <img src="${cofre.img}" alt="${cofre.name}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${cofre.name}</h3>
                        <p class="card-description">${cofre.description}</p>
                    </div>
                `;

        container.appendChild(card);
    });
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', renderProducts);