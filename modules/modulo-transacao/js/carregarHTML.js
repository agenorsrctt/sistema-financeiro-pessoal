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
                        <option value="Selecionar" selected disabled>Selecione uma categoria</option>
                        <option value="💰 Salário">💰 Salário</option>
                        <option value="💻 Freelance">💻 Freelance</option>
                        <option value="🛒 Venda">🛒 Venda</option>
                        <option value="📦 Outros">📦 Outros</option>
                    </select>

                    <select name="categoria-saida" class="categoria-saida">
                        <option value="Selecionar" selected disabled>Selecione uma categoria</option>
                        <option value="🍔 Alimentação">🍔 Alimentação</option>
                        <option value="🚗 Transporte">🚗 Transporte</option>
                        <option value="🏠 Moradia">🏠 Moradia</option>
                        <option value="❤️ Saúde">❤️ Saúde</option>
                        <option value="📚 Educação">📚 Educação</option>
                        <option value="🎮 Lazer">🎮 Lazer</option>
                        <option value="🛍️ Compras">🛍️ Compras</option>
                        <option value="📦 Outros">📦 Outros</option>
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