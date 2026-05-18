function carregarLocalStorage() {
    const getLista = localStorage.getItem("listaTransacoes");

    if (getLista) {
        return JSON.parse(getLista);
    } else {
        return [];
    }
}

const dados = carregarLocalStorage();

const btnExportar = document.querySelector(".exportar-csv");

btnExportar.addEventListener("click", () => {
    event.preventDefault();

    if (dados.length === 0) {
        alert("Nenhum dado encontrado!");
        return;
    }

    // Cabeçalho do CSV
    let csv = "Descricao,Data,Valor,Categoria\n";

    // Dados
    dados.forEach(dado => {
        csv += `${dado.descricao},${dado.data},${dado.valor},${dado.categoria}\n`;
    });

    // Cria arquivo
    const blob = new Blob([csv], { type: "text/csv" });

    // Cria link temporário
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "transacoes.csv";

    // Faz download
    link.click();
});
