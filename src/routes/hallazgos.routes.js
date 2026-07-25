// ============================================================
// ROUTES: Hallazgos
// ============================================================

const express = require("express");
const router = express.Router();
const hallazgosController = require("../controllers/hallazgos.controller");

router.get("/", hallazgosController.getAll);
router.get("/:id", hallazgosController.getById);
router.post("/", hallazgosController.create);
router.put("/:id", hallazgosController.update);
router.delete("/:id", hallazgosController.remove);

module.exports = router;
