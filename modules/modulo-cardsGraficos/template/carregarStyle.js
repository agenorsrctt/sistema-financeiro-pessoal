export function carregarStyleHTML() {
    const tema = document.createElement("link");
    tema.rel = "stylesheet";
    tema.href = "./modules/modulo-cardsGraficos/css/cardsGraficos.css";
    document.head.appendChild(tema);
}