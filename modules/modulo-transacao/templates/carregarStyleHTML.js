export function carregarStyleHTML() {
    const tema = document.createElement("link");
    tema.rel = "stylesheet";
    tema.href = "./modules/modulo-transacao/css/styleNovaTransacao.css";
    document.head.appendChild(tema);

}