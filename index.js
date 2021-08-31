const config = require("./infra/config");
const bancoDeDados = require("./infra/bancoDeDados");
const Tabelas = require("./infra/tabelaPedido");
const app = config();
const cors = require("cors");
const port = process.env.PORT;

app.listen(port, () => console.log("Servidor nasceu!"));
app.use(cors());

const tabela = new Tabelas();
bancoDeDados.run(tabela.pedidos);
