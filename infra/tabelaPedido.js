class Tabelas {
    pedidos = ('CREATE TABLE IF NOT EXISTS Pedidos (Hora text NOT NULL, ID_pedido integer PRIMARY KEY AUTOINCREMENT NOT NULL, cpf_func varchar(11) NOT NULL, itens varchar(250) NOT NULL, valor real NOT NULL, id_cliente integer)')
}

module.exports = Tabelas;


