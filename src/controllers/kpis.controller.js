// ============================================================
// CONTROLLER: KPIs
// Rol único: manejar req/res de Express.
// ============================================================

const kpisService = require("../services/kpis.service");

function getDashboard(req, res) {
  const dashboard = kpisService.getDashboard();
  res.status(200).json(dashboard);
}

module.exports = {
  getDashboard
};
