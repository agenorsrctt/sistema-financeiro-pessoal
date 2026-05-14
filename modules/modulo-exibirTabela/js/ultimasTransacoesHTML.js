export function tabelaTransacoes() {
    const div = document.querySelector(".ultimas-transacoes");

    const container = document.createElement("div");
    container.classList = "container";

    container.innerHTML = `
        <div class="container-tabela">
            <h2>Últimas Transações</h2>

            <table class="tabela">
            </table>
        </div>
    `;

    div.appendChild(container);
}