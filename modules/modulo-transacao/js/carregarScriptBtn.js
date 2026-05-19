export function carregarScriptBtn() {
    const transacoes = document.querySelector(".transacoes");
    const listaDeDados = JSON.parse(localStorage.getItem("listaTransacoes")) || [];

    const btnSaida = document.querySelector(".saida");
    const categoriaSaida = document.querySelector(".categoria-saida");

    const btnEntrada = document.querySelector(".entrada");
    const categoriaEntrada = document.querySelector(".categoria-entrada");

    let tipoSelecionado = "Entrada";

    btnSaida.addEventListener("click", event => {
        tipoSelecionado = "Saída";

        btnEntrada.classList.remove("ativo");
        btnSaida.classList.add("ativo");

        categoriaEntrada.classList.remove("ativo")
        categoriaSaida.classList.add("ativo");
    })

    btnEntrada.addEventListener("click", event => {
        tipoSelecionado = "Entrada";

        btnSaida.classList.remove("ativo");
        btnEntrada.classList.add("ativo");

        categoriaSaida.classList.remove("ativo");
        categoriaEntrada.classList.add("ativo")
    })

    let categoriaEscolhida;

    transacoes.addEventListener("submit", event => {
        event.preventDefault();

        if (tipoSelecionado === "Entrada") {
            categoriaEscolhida = categoriaEntrada.value;
        } else {
            categoriaEscolhida = categoriaSaida.value;
        }

        const novoValor = {
            id: Date.now(),
            descricao: event.target.descricao.value,
            valor: event.target.valor.value,
            categoria: categoriaEscolhida,
            escolha: tipoSelecionado,
            data: event.target.dataAtual.value || new Date().toISOString().split("T")[0]
        }
        listaDeDados.push(novoValor);
        salvarLocalStorage(listaDeDados);
        transacoes.reset();
        console.log("Categoria Escolhida: ", categoriaEscolhida);
        location.reload();
    })

    function salvarLocalStorage(parametro) {
        return localStorage.setItem("listaTransacoes", JSON.stringify(parametro));
    }
}