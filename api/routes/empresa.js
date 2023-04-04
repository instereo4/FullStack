import express from "express";
import { addEmpresa, deleteEmpresa, getEmpresa, updateEmpresa } from "../controllers/empresa.js";

const routeremp = express.Router()

routeremp.get("/", getEmpresa)

routeremp.post("/", addEmpresa)

routeremp.put("/:id", updateEmpresa)

routeremp.delete("/:id", deleteEmpresa)

export default routeremp