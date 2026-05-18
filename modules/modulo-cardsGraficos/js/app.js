import { getDespesas } from "./getDespesas.js";
import { getEvolucao } from "./getEvolucao.js";
import { getValores } from "./getValores.js";
import { carregarStyleHTML } from "../template/carregarStyle.js";
carregarStyleHTML();
getValores();
getEvolucao();
getDespesas();