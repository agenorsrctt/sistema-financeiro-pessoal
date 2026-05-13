export function carregarScriptModal() {
    const btnAbrir = document.querySelector("#btnAbrir");
    const btnFechar = document.querySelector("#cancelar");
    const container = document.querySelector(".novas-transacoes");
    const form = document.querySelector(".transacoes");


    btnAbrir.addEventListener("click", clicado => {
        container.style.display = "flex";
    })

    btnFechar.addEventListener("click", clicado => {
        container.style.display = "none";
    })

    form.addEventListener("submit", input => {
        container.style.display = "none";
    })

    container.addEventListener("click", clicado => {
        if (clicado.target === container) {
            container.style.display = "none";
        }
    })
}