const express = require("express");
const router = express.Router();

const auditoriasRoutes = require("./auditorias.routes");
const hallazgosRoutes = require("./hallazgos.routes");
const kpisRoutes = require("./kpis.routes");

router.use("/auditorias", auditoriasRoutes);
router.use("/hallazgos", hallazgosRoutes);
router.use("/kpis", kpisRoutes);

module.exports = router;
