db.produtos.find(
  { $and: [{ curtidas: { $lt: 100, $gt: 10 } }] },
  { nome: true, _id: false, curtidas: true },
); 