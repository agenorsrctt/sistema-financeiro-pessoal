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

        td.innerHTML = `
                <td>${lista.descricao}</td>
                <td>${lista.categoria}</td>
                <td>${lista.escolha}</td>
                <td>${lista.data}</td>
                <td>${lista.valor}</td>
            `

        console.log(tabela)
        tabela.appendChild(td);
    })
}