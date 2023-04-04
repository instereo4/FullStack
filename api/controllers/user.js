import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM fornecedor";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO fornecedor(`cnpjcpf`,`nome`, `email`, `cep`, `rg`, `data`) VALUES(?)";

  const values = [
    req.body.cnpjcpf,
    req.body.nome,
    req.body.email,
    req.body.cep,
    req.body.rg,
    req.body.data,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Fornecedor criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE fornecedor SET `cnpjcpf` = ?, `nome` = ?, `email` = ?, `cep` = ?, `rg` = ?, `data` = ? WHERE `id` = ?";

  const values = [
    req.body.cnpjcpf,
    req.body.nome,
    req.body.email,
    req.body.cep,
    req.body.rg,
    req.body.data,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Fornecedor atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM fornecedor WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Fornecedor deletado com sucesso.");
  });
};
