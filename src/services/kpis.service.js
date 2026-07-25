// ============================================================
// SERVICE: KPIs (Dashboard)
// Rol único: calcular indicadores a partir de los datos de
// auditorías y hallazgos. No guarda datos propios.
// ============================================================

const auditoriasService = require("./auditorias.service");
const hallazgosService = require("./hallazgos.service");

function getDashboard() {
  const auditorias = auditoriasService.getRawData();
  const hallazgos = hallazgosService.getRawData();

  const totalAuditorias = auditorias.length;
  const auditoriasCompletadas = auditorias.filter(
    (a) => a.estado === "Completada"
  ).length;
  const auditoriasEnProceso = auditorias.filter(
    (a) => a.estado === "En proceso"
  ).length;
  const auditoriasPendientes = auditorias.filter(
    (a) => a.estado === "Pendiente"
  ).length;

  const totalHallazgos = hallazgos.length;
  const hallazgosAbiertos = hallazgos.filter(
    (h) => h.estado === "Abierto"
  ).length;
  const hallazgosCerrados = hallazgos.filter(
    (h) => h.estado === "Cerrado"
  ).length;

  const hallazgosPorSeveridad = {
    Alta: hallazgos.filter((h) => h.severidad === "Alta").length,
    Media: hallazgos.filter((h) => h.severidad === "Media").length,
    Baja: hallazgos.filter((h) => h.severidad === "Baja").length
  };

  const porcentajeCompletadas =
    totalAuditorias === 0
      ? 0
      : Math.round((auditoriasCompletadas / totalAuditorias) * 100);

  return {
    totalAuditorias,
    auditoriasCompletadas,
    auditoriasEnProceso,
    auditoriasPendientes,
    porcentajeCompletadas,
    totalHallazgos,
    hallazgosAbiertos,
    hallazgosCerrados,
    hallazgosPorSeveridad
  };
}

module.exports = {
  getDashboard
};
