const Itens = require("../models/index");

//GET ITENS
exports.getProducts = async (req, res, next) => {
  const itens = await Itens.findAll();
  res.status(200).json({
    message: "Produtos encontrados com sucesso!",
    result: itens,
  });
};

//CREATE

exports.creatItens = async (req, res, next) => {
  try {
    const itens = new Itens(req.body);
    console.log(itens);

    const result = await itens.save();

    res.status(200).json({
      message: "Itens criado com sucesso!!",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar o item!",
      result: error,
    });
  }
};

//DELETE
exports.deleteItens = async (req, res, next) => {
  try {
    const result = await Itens.destroy({
      where: { id: itemId },
    });

    if (result) {
      res.status(200).json({
        message: "Item deletado com sucesso!",
      });
    } else {
      res.status(404).json({
        message: "Item não encontrado!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar o item!",
      result: error,
    });
  }
};
