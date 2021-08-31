const PedidosModel = require("../model/pedidosModel");

module.exports = (app) => {
  app.get("/pedidos", async (req, res) => {
    try {
      const selectPedido = await PedidosModel.lista(res);
      res.send(selectPedido);
    } catch (erro) {
      res.send(erro);
    }
  });

  app.post("/pedidos", async (req, res) => {
    try {
      const pedido = req.body;
      const fazerPedidos = await PedidosModel.postar(pedido, res);
      res.status(200).send(fazerPedidos);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.put("/pedidos/:id", async (req, res) => {
    try {
      const atualizacao = req.body;
      const selectChaveP = req.params.id;
      const atualizacaoPedido = await PedidosModel.atualiza(
        atualizacao,
        selectChaveP,
        res
      );
      res.status(200).send(atualizacaoPedido);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.delete("/pedidos/:id", async (req, res) => {
    try {
      const deletar = req.params.id;
      const excluirPedido = await PedidosModel.exclusao(deletar, res);
      res.status(200).send(excluirPedido);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });
};
