export function logicaUltimasTransacoes() {
    const tabela = document.querySelector(".tabela");

    function carregarLocalStorage() {
        const getLista = localStorage.getItem("listaTransacoes")
        if (getLista) {
            return JSON.parse(getLista);
        } else {
            return [];
        }
    }

    const listaAtualizada = carregarLocalStorage();

    tabela.innerHTML = "";

    const th = document.createElement("tr");

    th.innerHTML = `
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ações</th>
            `;

    tabela.appendChild(th);
    listaAtualizada.forEach(lista => {

        const td = document.createElement("tr");

        if (lista.escolha === "Saída") {

            td.innerHTML = `
                <td class="despesas">${lista.descricao}</td>
                <td class="despesas">${lista.categoria}</td>
                <td class="despesas">${lista.escolha}</td>
                <td class="despesas">${lista.data}</td>
                <td class="despesas">R$ ${lista.valor}</td>
            `;
        } else {

            td.innerHTML = `
                <td class="receitas">${lista.descricao}</td>
                <td class="receitas">${lista.categoria}</td>
                <td class="receitas">${lista.escolha}</td>
                <td class="receitas">${lista.data}</td>
                <td class="receitas">R$ ${lista.valor}</td>
            `;
        }

        const editar = document.createElement("button");
        const excluir = document.createElement("button");
        const tdAcoes = document.createElement("td");

        editar.textContent = "✏️ Editar";
        excluir.textContent = "🗑️ Excluir";

        tdAcoes.appendChild(editar);
        tdAcoes.appendChild(excluir);

        tdAcoes.classList.add("tdAcoes");

        td.appendChild(tdAcoes)

        tabela.appendChild(td);
    })
}