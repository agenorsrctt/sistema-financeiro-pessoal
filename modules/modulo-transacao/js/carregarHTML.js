export function carregarHTML() {
    const containerNvTransacaoModal = document.createElement("div");

    containerNvTransacaoModal.innerHTML = `
        <div class="abrir-modal">
            <button type="button" id="btnAbrir">Nova Transação</button>
        </div>

        <div class="novas-transacoes">
            <div class="formulario">
                <form class="transacoes">
                    <h2>Nova Transação</h2>
                    <label for="descricao">Descrição</label>
                    <input type="text" name="descricao" required>
                    <label for="valor">Valor</label>
                    <input type="number" name="valor" required>

                    <label for="categoria">Categoria</label>
                    <select name="categoriaEntrada" class="categoria-entrada ativo"> <!-- Entrada -->
                        <option value="selecionar" selected disabled>Selecione uma categoria</option>
                        <option value="salario">💰 Salário</option>
                        <option value="freelance">💻 Freelance</option>
                        <option value="venda">🛒 Venda</option>
                        <option value="outros">📦 Outros</option>
                    </select>

                    <select name="categoria-saida" class="categoria-saida" required>
                        <option value="selecionar" selected disabled>Selecione uma categoria</option>
                        <option value="alimentacao">🍔 Alimentação</option>
                        <option value="transporte">🚗 Transporte</option>
                        <option value="moradia">🏠 Moradia</option>
                        <option value="saude">❤️ Saúde</option>
                        <option value="educacao">📚 Educação</option>
                        <option value="lazer">🎮 Lazer</option>
                        <option value="compras">🛍️ Compras</option>
                        <option value="outros">📦 Outros</option>
                    </select>

                    <div class="btn-entrada-saida">
                        <label for="tipo">Tipo</label>
                        <button name="entrada" type="button" class="entrada">⬆ Entrada</button>
                        <button name="saida" type="button" class="saida">⬇ Saida</button>
                    </div>

                    <div class="data">
                        <label for="data">Data</label>
                        <input type="date" name="dataAtual" id="data-atual">
                    </div>

                    <div class="btn-enviar-transacao">
                        <button id="cancelar" type="reset">Cancelar</button>
                        <button id="salvar" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    const nav = document.querySelector(".nav-bar");
    nav.appendChild(containerNvTransacaoModal);
}