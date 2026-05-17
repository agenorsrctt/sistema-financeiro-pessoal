export function getValores() {

    function carregarLocalStorage() {
        const getLista = localStorage.getItem("listaTransacoes");

        if (getLista) {
            return JSON.parse(getLista);
        } else {
            return [];
        }
    }

    const dados = carregarLocalStorage();

    function despesasTotais() {
        return dados.reduce((total, atual) => {

            if (atual.escolha === "Saída") {
                return total + Number(atual.valor);
            }

            return total;

        }, 0);
    }

    function receitasTotais() {
        return dados.reduce((total, atual) => {

            if (atual.escolha === "Entrada") {
                return total + Number(atual.valor);
            }

            return total;

        }, 0);
    }

    function saldoTotal() {
        const entrada = receitasTotais();
        const saida = despesasTotais();

        const saldo = entrada - saida;
        return saldo;
    }

    function totalGeral() {
        const entrada = receitasTotais();
        const saida = despesasTotais();

        const saldo = entrada + saida;
        return saldo;
    }

    const receitaValores = receitasTotais();
    const despesaValores = despesasTotais();
    const saldoTotalValores = saldoTotal();
    const totalGeralValores = totalGeral();

    const getReceita = document.querySelector("#receitas");
    const getDespesa = document.querySelector("#despesas");
    const getSaldo = document.querySelector("#saldo");
    const getTotal = document.querySelector("#geral");

    getReceita.innerHTML = "";
    getDespesa.innerHTML = "";
    getSaldo.innerHTML = "";
    getTotal.innerHTML = "";

    const h2receita = document.createElement("h2");
    const h2despesa = document.createElement("h2");
    const h2saldo = document.createElement("h2");
    const h2geral = document.createElement("h2");

    h2receita.textContent = receitaValores.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    h2despesa.textContent = despesaValores.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    h2saldo.textContent = saldoTotalValores.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    h2geral.textContent = totalGeralValores.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    getReceita.appendChild(h2receita);
    getDespesa.appendChild(h2despesa);
    getSaldo.appendChild(h2saldo);
    getTotal.appendChild(h2geral);
}