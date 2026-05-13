export function carregarScriptBtn() {
    const transacoes = document.querySelector(".transacoes");
    const listaDeDados = [];

    const btnSaida = document.querySelector(".saida");
    const categoriaSaida = document.querySelector(".categoria-saida");

    const btnEntrada = document.querySelector(".entrada");
    const categoriaEntrada = document.querySelector(".categoria-entrada");

    let tipoSelecionado = "entrada";
    let categoriaEscolhida = ""

    btnSaida.addEventListener("click", event => {
        tipoSelecionado = "saida";
        categoriaEscolhida = categoriaSaida.value;
        btnSaida.classList.toggle("ativo");
        categoriaEntrada.classList.remove("ativo")
        categoriaSaida.classList.add("ativo");
    })

    btnEntrada.addEventListener("click", event => {
        tipoSelecionado = "entrada";
        categoriaEscolhida = categoriaEntrada.value;
        btnEntrada.classList.toggle("ativo");
        categoriaSaida.classList.remove("ativo");
        categoriaEntrada.classList.add("ativo")
    })


    transacoes.addEventListener("submit", event => {
        event.preventDefault();

        const novoValor = {
            descricao: event.target.descricao.value,
            valor: event.target.valor.value,
            categoria: categoriaEscolhida,
            escolha: tipoSelecionado,
            data: event.target.dataAtual.value || new Date().toISOString().split("T")[0]
        }
        listaDeDados.push(novoValor);
        salvarLocalStorage(listaDeDados);
        transacoes.reset();

        console.log(listaDeDados)
    })

    function salvarLocalStorage(parametro) {
        return localStorage.setItem("listaTransacoes", JSON.stringify(parametro));
    }
}