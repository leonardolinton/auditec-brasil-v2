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
    },
    {
        id: 6,
        name: "Porta forte fabricada sob medida",
        description: "Construídas para suportar ataques físicos intensos, ideais para locais públicos e áreas de alto risco.",
        img: "./assets/img/safe_06.jpeg"
    },
    {
        id: 7,
        name: "Portas blindadas fabricadas sob medidas",
        description: "",
        img: './assets/img/safe_07.jpeg'
    },
    {
        id: 8,
        name: "Cofre de altíssima segurança C 140",
        description: "",
        img: "./assets/img/safe_08.jpeg"
    },
    {
        id: 9,
        name: "Cofre concretado C 100",
        description: "",
        img: "./assets/img/safe_09.jpeg"
    },
    {
        id: 10,
        name: "Cofre de blindado alta segurança",
        description: "",
        img: "./assets/img/safe_10.jpeg"
    },
    {
        id: 11,
        name: "Cofre Concretado c 80",
        description: "",
        img: "./assets/img/safe_11.jpeg"
    },
    {
        id: 12,
        name: "Cofre de alta segurança com boca de lobo",
        description: "",
        img: "./assets/img/safe_12.jpeg"
    },
    {
        id: 13,
        name: "Cofre de blindado alta segurança",
        description: "",
        img: "./assets/img/safe_13.jpeg"
    },
    {
        id: 14,
        name: "Cofre Digital Á Prova D'água/fogo 22,8 L Preto",
        description: "",
        img: "./assets/img/safe_14.jpeg"
    },
    {
        id: 15,
        name: "Cofre Caixa De Arquivo Contra Fogo E Água 18,3l - Sentrysafe Cor Preto",
        description: "",
        img: "./assets/img/safe_15.jpeg"
    },
    {
        id: 16,
        name: "C 72",
        description: "",
        img: "./assets/img/safe_16.jpeg"
    },
    {
        id: 17,
        name: "C 60",
        description: "",
        img: "./assets/img/safe_17.jpeg"
    },
    {
        id: 18,
        name: "Digital Not",
        description: "",
        img: "./assets/img/safe_18.jpeg"
    },
    {
        id: 19,
        name: "CD 31",
        description: "",
        img: "./assets/img/safe_19.jpeg"
    },
    {
        id: 20,
        name: "CD 35",
        description: "",
        img: "./assets/img/safe_20.jpeg"
    },
    {
        id: 21,
        name: "C50",
        description: "",
        img: "./assets/img/safe_21.jpeg"
    },
    {
        id: 22,
        name: "S36",
        description: "",
        img: "./assets/img/safe_22.jpeg"
    },
    {
        id: 23,
        name: "S24",
        description: "",
        img: "./assets/img/safe_23.jpeg"
    },
    {
        id: 24,
        name: "Fechadura Digital",
        description: "",
        img: "./assets/img/safe_24.jpeg"
    },
    {
        id: 25,
        name: "S54",
        description: "",
        img: "./assets/img/safe_25.jpeg"
    },
    {
        id: 26,
        name: "S17",
        description: "",
        img: "./assets/img/safe_26.jpeg"
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