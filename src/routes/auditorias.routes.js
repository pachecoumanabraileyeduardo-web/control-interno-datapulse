// ============================================================
// ROUTES: Auditorias
// Rol único: recibir la petición HTTP y pasarle el turno
// al controlador correspondiente.
// ============================================================

const express = require("express");
const router = express.Router();
const auditoriasController = require("../controllers/auditorias.controller");

router.get("/", auditoriasController.getAll);
router.get("/:id", auditoriasController.getById);
router.post("/", auditoriasController.create);
router.put("/:id", auditoriasController.update);
router.delete("/:id", auditoriasController.remove);

module.exports = router;
