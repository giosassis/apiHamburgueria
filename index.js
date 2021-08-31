const config = require("./infra/config");
const bancoDeDados = require("./infra/bancoDeDados");
const Tabelas = require("./infra/tabelaPedido");
const app = config();

app.listen(3000, () => console.log("Servidor nasceu!"));

const tabela = new Tabelas();
bancoDeDados.run(tabela.pedidos);
