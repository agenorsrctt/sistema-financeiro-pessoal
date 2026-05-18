export function excluir(){

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

    const btnExcluir = document.querySelectorAll(".excluir");
    const listaDaTabela = carregarLocalStorage();

    btnExcluir.forEach((btn, indice) => {

        btn.addEventListener("click", () => {

            listaDaTabela.splice(indice, 1);

            salvarLocalStorage(listaDaTabela);

            location.reload();

        });

    });

}