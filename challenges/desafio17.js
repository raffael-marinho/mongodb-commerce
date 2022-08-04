db.resumoProdutos
  .insertOne({
    franquia: "McDonalds",
    totalProdutos: db.produtos.find().count(),
  });

db.resumoProdutos
  .find(
    { franquia: "McDonalds" },
    { _id: 0, franquia: 1, totalProdutos: 1 },
  ); 