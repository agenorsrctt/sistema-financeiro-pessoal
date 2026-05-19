export function carregarInput() {

    function carregarLocalStorage() {
        const getLista = localStorage.getItem("listaTransacoes");

        if (getLista) {
            return JSON.parse(getLista);
        } else {
            return [];
        }
    }

    const buscar = document.querySelector(".titulo-busca");

    if (buscar.querySelector("input")) return;

    const input = document.createElement("input");

    const itensTabela = carregarLocalStorage();

    input.innerHTML = ""

    input.placeholder = "Digite a descrição do item";

    buscar.appendChild(input);

    input.addEventListener("input", event => {
        event.preventDefault();

        const item = event.target.value.toLowerCase();

        const result = itensTabela.filter(it => {
            console.log(it.descricao);
            return it.descricao.toLowerCase().includes(item);
        })

        const tabela = document.querySelector(".tabela");

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

        if (result.length > 0) {

            result.forEach(r => {
                const td = document.createElement("tr");

                if (r.escolha === "Saída") {
                    td.innerHTML = `
                    <td class="despesas">${r.descricao}</td>
                    <td class="despesas">${r.categoria}</td>
                    <td class="despesas">${r.escolha}</td>
                    <td class="despesas">${r.data}</td>
                    <td class="despesas">R$ ${r.valor}</td>
                    <td ></td>
                    `;
                }else{
                    td.innerHTML = `
                    <td class="receitas">${r.descricao}</td>
                    <td class="receitas">${r.categoria}</td>
                    <td class="receitas">${r.escolha}</td>
                    <td class="receitas">${r.data}</td>
                    <td class="receitas">R$ ${r.valor}</td>
                    <td class="receitas"></td>
                    `;
                }

                tabela.appendChild(td);
            })
        } else {
            const td = document.createElement("tr");
            td.innerHTML = `
                <td>Nenhum resultado encontrado</td>
            `;
            tabela.appendChild(td);
        }
    })
    console.log(itensTabela);
}