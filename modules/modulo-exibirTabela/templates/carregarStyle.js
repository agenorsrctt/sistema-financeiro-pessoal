export function carregarStyleHTML() {
    const tema = document.createElement("link");
    tema.rel = "stylesheet";
    tema.href = "./modules/modulo-exibirTabela/css/tabela.css";
    document.head.appendChild(tema);

}