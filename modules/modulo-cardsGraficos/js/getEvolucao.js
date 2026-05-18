export function getEvolucao() {

    function carregarLocalStorage() {
        const getLista = localStorage.getItem("listaTransacoes");

        if (getLista) {
            return JSON.parse(getLista);
        } else {
            return [];
        }
    }

    const dados = carregarLocalStorage();

    function receitasEvolucao() {

        const descricao = [];
        const valor = [0];
        const data = [];

        dados.forEach(dado => {
            if (dado.escolha === "Entrada") {
                descricao.push(dado.descricao);
                valor.push(dado.valor);
                data.push(dado.data);
            }
        })

        return {
            descricao, valor, data
        }
    }

    function despesasEvolucao() {

        const descricao = [];
        const valor = [0];
        const data = [];

        dados.forEach(dado => {
            if (dado.escolha === "Saída") {
                descricao.push(dado.descricao);
                valor.push(dado.valor);
                data.push(dado.data);
            }
        })

        return {
            descricao, valor, data
        }
    }

    function dataCount() {

        const data = [];

        dados.forEach(dado => {
            data.push(dado.data);
        })
        return data;
    }

    const despesas = despesasEvolucao();
    const receitas = receitasEvolucao();
    const data = dataCount();



    const ctx = document.getElementById("evolucao");

    new Chart(ctx, {
        type: "line",

        data: {
            labels: data,

            datasets: [

                {
                    label: "Receitas",
                    data: receitas.valor,
                    backgroundColor: "rgba(34, 197, 94, 0.3)",

                    fill: true,
                    tension: 0.1,
                    pointRadius: 4,
                    pointBackgroundColor: "rgb(34, 197, 94)",
                    borderWidth: 1
                },

                {
                    label: "Despesas",
                    data: despesas.valor,
                    backgroundColor: "rgba(239, 68, 68, 0.3)",

                    fill: true,
                    tension: 0.1,
                    pointRadius: 4,
                    pointBackgroundColor: "rgb(239, 68, 68)",
                    borderWidth: 1
                }


            ]
        },

        options: {
            responsive: true,
        }

    });



}