document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    const resultContainer = document.getElementById("result-container");

    const searchResults = [
        {
            title: "Mochila Tumi",
            description: "Mochila premium, projetada para máxima funcionalidade e estilo, perfeita para viagens e uso diário. Feita com materiais resistentes e detalhes elegantes.",
            image: "img/inter/masc/1mascinter.png"
        },
        {
            title: "Bolsa de Tiracolo Samsonite",
            description: "Bolsa prática e sustentável, confeccionada com materiais reciclados. Ideal para carregar o essencial no dia a dia de maneira ecológica e moderna.",
            image: "img/inter/masc/2mascinter.png"
        },
        {
            title: "Bolsa transversal Herschel Supply Co.",
            description: "Bolsa compacta e estilosa que mescla um visual retrô com praticidade moderna. Ideal para quem busca charme e funcionalidade em uma só peça.",
            image: "img/inter/masc/3mascinter.png"
        },
        {
            title: "Bolsa Vertical Sestini",
            description: "Bolsa vertical espaçosa, com design sofisticado para combinar com diversas ocasiões. Fabricada com materiais duráveis, disponível em várias cores.",
            image: "image: img/nacional/masc/1masc.png"
        },
        {
            title: "Polchete Kipling",
            description: "Pochete leve e versátil, confeccionada com materiais reciclados. Perfeita para quem busca mobilidade e organização, com um toque sustentável.",
            image: "img/nacional/masc/2masc.png"
        },
        {
            title: "Bolsa Osklen Nylon",
            description: "Bolsa resistente e de estilo despojado, inspirada no design retrô. Combina elegância e funcionalidade para o uso urbano diário.",
            image: "image: img/nacional/masc/3masc.png"
        },
        {
            title: "Bolsa Michael Kors",
            description: "Bolsa de alta qualidade, com design elegante e sofisticado, perfeita para eventos ou ocasiões especiais. Disponível em cores clássicas.",
            image: "img/inter/fem/1feminter.png"
        },
        {
            title: "Bolsa Channel",
            description: "Modelo icônico e sustentável, feita com materiais reciclados. Combina o luxo atemporal da marca com a sustentabilidade para o dia a dia.",
            image: "img/inter/fem/2feminter.png"
        },
        {
            title: "Bolsa Louis Vuitton",
            description: "Bolsa exclusiva com design clássico e toque retrô. Uma peça única e sofisticada, que adiciona estilo a qualquer visual.",
            image: "img/inter/fem/3feminter.png"
        },
        {
            title: "Bolsa Santa Lolla",
            description: "Bolsa estilosa e versátil, com acabamento premium e toque de elegância. Ótima escolha para ocasiões formais e casuais.",
            image: "img/nacional/fem/1fem.png"
        },
        {
            title: "Bolsa Schutz",
            description: "Sofisticada e ecológica, feita com materiais sustentáveis. Ideal para quem procura estilo e responsabilidade ambiental.",
            image: "img/nacional/fem/2fem.png"
        },
        {
            title: "Bolsa Arezzo",
            description: "Bolsa charmosa que combina o melhor do estilo retrô com a modernidade. Peça única para compor looks urbanos e elegantes.",
            image: "img/nacional/fem/3fem.png"
        },
        {
            title: "Bolsa Fjallraven",
            description: "Bolsa durável e elegante, prática para diversas ocasiões e confeccionada com materiais de alta resistência. Ideal para o dia a dia.",
            image: "img/inter/uni/1interuni.png"
        },
        {
            title: "ShoulderBag Heschel Supply",
            description: "Bolsa de ombro moderna, feita com materiais reciclados. Prática e com espaço ideal para o essencial do dia a dia.",
            image: "img/inter/uni/2interuni.png"
        },
        {
            title: "Mochila Pakr",
            description: "Mochila estilosa com design vintage, prática para carregar itens essenciais. Uma peça que resgata o charme do estilo retrô.",
            image: "img/inter/uni/3interuni.png"
        },
        {
            title: "Bolsa Unissex Osklen",
            description: "Bolsa elegante e versátil, com design minimalista e espaço para itens essenciais. Ideal para combinar com qualquer look.",
            image: "img/nacional/uni/1uni.png"
        },
        {
            title: "Bolsa Farm",
            description: "Bolsa casual e sustentável, confeccionada com materiais reciclados. Perfeita para quem quer estilo e responsabilidade ambiental.",
            image: "img/nacional/uni/2uni.png"
        },
        {
            title: "Bolsa Alexandre Pavão",
            description: "Peça exclusiva, com design arrojado e um toque vintage. Combina modernidade com um visual que resgata o charme do passado.",
            image: "img/nacional/uni/3uni.png"
        }
    ];

    resultContainer.innerHTML = searchResults
        .filter(result => result.title.toLowerCase().includes(query.toLowerCase()))
        .map(result => 
            `<div class="card mb-3">
                <div class="row no-gutters">
                    ${result.image ? `<div class="col-md-4"><img src="${result.image}" class="card-img" alt="${result.title}"></div>` : ""}
                    <div class="col-md-${result.image ? '8' : '12'}">
                        <div class="card-body">
                            <h5 class="card-title">${result.title}</h5>
                            <p class="card-text">${result.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
        )
        .join("");

    if (!resultContainer.innerHTML) {
        resultContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
});
