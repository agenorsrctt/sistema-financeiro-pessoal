export function editar() {

    function carregarLocalStorage() {
        const getLista = localStorage.getItem("listaTransacoes")
        if (getLista) {
            return JSON.parse(getLista);
        } else {
            return [];
        }
    }

    function salvarLocalStorage(parametro) {
        return localStorage.setItem("listaTransacoes", JSON.stringify(parametro));
    }

    const btnEditar = document.querySelectorAll(".editar");
    const listaDaTabela = carregarLocalStorage();

    btnEditar.forEach((editar, indice) => {

        editar.addEventListener("click", event => {

            const dado = listaDaTabela[indice];

            let novaDescricao = prompt("Digite a nova descrição: ", dado.descricao);
            if (novaDescricao === null || novaDescricao === "") {
                novaDescricao = dado.descricao;
            }
            let novaData = prompt("Digite a nova descrição: ", dado.data);
            if (novaData === null || novaData === "") {
                novaData = dado.data;
            }
            let novaValor = prompt("Digite a nova descrição: ", dado.valor);
            if (novaValor === null || novaValor === "") {
                novaValor = dado.valor;
            }

            const novosValores = {
                descricao: novaDescricao,
                categoria: dado.categoria,
                escolha: dado.escolha,
                data: novaData,
                valor: novaValor
            }

            listaDaTabela[indice] = novosValores;
            salvarLocalStorage(listaDaTabela);
            location.reload();


        })

    })
}