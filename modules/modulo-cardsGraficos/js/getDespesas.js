export function getDespesas() {

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

    function despesasPorItens() {

        const nome = [];
        const valor = [];

        dados.forEach(dado => {

            if (dado.escolha === "Saída") {

                nome.push(dado.descricao);
                valor.push(Number(dado.valor));

            }

        });

        return {
            nome,
            valor
        };
    }

    const despesas = despesasTotais();

    const centerTextPlugin = {
        id: "centerText",

        beforeDraw(chart) {

            const { ctx, width, height } = chart;

            const totalFormatado = despesas.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

            ctx.save();

            ctx.font = "bold 18px Verdana";
            ctx.fillStyle = "#111";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(
                totalFormatado,
                width / 2,
                height / 2
            );
        }
    };

    const graficoDados = despesasPorItens();

    console.log(graficoDados);

    const ctx = document.getElementById("grafico");

    const cores = [
        "#ef4444", // vermelho
        "#d946ef", // magenta
        "#3b82f6", // azul
        "#ec4899", // rosa
        "#f97316", // laranja forte
        "#06b6d4", // ciano
        "#6366f1", // índigo
        "#7c3aed",  // violeta
        "#0ea5e9", // azul claro
        "#8b5cf6", // roxo
    ];

    new Chart(ctx, {
        type: "doughnut",

        data: {
            labels: graficoDados.nome,

            datasets: [{
                label: `Total: ${despesas}`,
                data: graficoDados.valor,

                backgroundColor: cores,

                borderWidth: 1
            }]
        },

        plugins: [centerTextPlugin],

        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false,
                    position: "right",
                }
            }
        },

    });

    function carregarDescricoes() {

        const legendas = document.querySelector(".legendas");

        legendas.innerHTML = "";

        dados.forEach((dado, index) => {

            if (dado.escolha === "Saída") {

                const item = document.createElement("div");
                item.classList.add("item-legenda");

                const cor = document.createElement("span");
                cor.classList.add("cor-legenda");

                cor.style.backgroundColor = cores[index];

                const texto = document.createElement("p");
                texto.innerText = dado.descricao;

                const valor = document.createElement("p");
                valor.innerText = `R$ ${dado.valor}`;

                item.appendChild(cor);
                item.appendChild(texto);
                item.appendChild(valor);

                legendas.appendChild(item);
            }

        });
    }

    carregarDescricoes();
}