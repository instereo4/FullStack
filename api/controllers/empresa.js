import { db } from "../db.js";

export const getEmpresa = (_, res) => {
  const q = "SELECT * FROM empresa";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEmpresa = (req, res) => {
  const q =
    "INSERT INTO empresa(`cnpj`,`nome`, `cep`) VALUES(?)";

  const values = [
    req.body.cnpj,
    req.body.nome,
    req.body.cep,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa criada com sucesso.");
  });
};

export const updateEmpresa = (req, res) => {
  const q =
    "UPDATE empresa SET `cnpj` = ?,`nome` = ?, `cep` = ? WHERE `id` = ?";

  const values = [
    req.body.cnpj,
    req.body.nome,
    req.body.cep,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa atualizada com sucesso.");
  });
};

export const deleteEmpresa = (req, res) => {
  const q = "DELETE FROM empresa WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa deletado com sucesso.");
  });
};
