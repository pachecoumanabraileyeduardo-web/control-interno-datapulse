// ============================================================
// CONTROLLER: Auditorias
// Rol único: manejar req/res de Express. Llama al service,
// NO procesa datos ni contiene lógica de negocio.
// ============================================================

const auditoriasService = require("../services/auditorias.service");

function getAll(req, res) {
  const auditorias = auditoriasService.getAll();
  res.status(200).json(auditorias);
}

function getById(req, res) {
  const auditoria = auditoriasService.getById(req.params.id);
  if (!auditoria) {
    return res.status(404).json({ error: "Auditoría no encontrada" });
  }
  res.status(200).json(auditoria);
}

function create(req, res) {
  const { fecha, area, responsable } = req.body;
  if (!fecha || !area || !responsable) {
    return res.status(400).json({
      error: "Los campos fecha, area y responsable son obligatorios"
    });
  }
  const nueva = auditoriasService.create(req.body);
  res.status(201).json(nueva);
}

function update(req, res) {
  const actualizada = auditoriasService.update(req.params.id, req.body);
  if (!actualizada) {
    return res.status(404).json({ error: "Auditoría no encontrada" });
  }
  res.status(200).json(actualizada);
}

function remove(req, res) {
  const eliminado = auditoriasService.remove(req.params.id);
  if (!eliminado) {
    return res.status(404).json({ error: "Auditoría no encontrada" });
  }
  res.status(204).send();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
