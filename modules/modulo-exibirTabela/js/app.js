import { tabelaTransacoes } from "./ultimasTransacoesHTML.js";
import { logicaUltimasTransacoes } from "./logicaUltimasTransacoes.js";
import { carregarStyleHTML } from "../templates/carregarStyle.js"
import { editar } from "./editar.js";
import { excluir } from "./excluir.js";
import { carregarInput } from "./busca.js";

tabelaTransacoes();
carregarStyleHTML();
logicaUltimasTransacoes();
editar();
excluir();
carregarInput();