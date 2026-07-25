// ============================================================
// CONTROLLER: Hallazgos
// Rol único: manejar req/res de Express.
// ============================================================

const hallazgosService = require("../services/hallazgos.service");

function getAll(req, res) {
  const { auditoriaId } = req.query;

  if (auditoriaId) {
    const filtrados = hallazgosService.getByAuditoriaId(auditoriaId);
    return res.status(200).json(filtrados);
  }

  const hallazgos = hallazgosService.getAll();
  res.status(200).json(hallazgos);
}

function getById(req, res) {
  const hallazgo = hallazgosService.getById(req.params.id);
  if (!hallazgo) {
    return res.status(404).json({ error: "Hallazgo no encontrado" });
  }
  res.status(200).json(hallazgo);
}

function create(req, res) {
  const { auditoriaId, descripcion } = req.body;
  if (!auditoriaId || !descripcion) {
    return res.status(400).json({
      error: "Los campos auditoriaId y descripcion son obligatorios"
    });
  }
  const nuevo = hallazgosService.create(req.body);
  res.status(201).json(nuevo);
}

function update(req, res) {
  const actualizado = hallazgosService.update(req.params.id, req.body);
  if (!actualizado) {
    return res.status(404).json({ error: "Hallazgo no encontrado" });
  }
  res.status(200).json(actualizado);
}

function remove(req, res) {
  const eliminado = hallazgosService.remove(req.params.id);
  if (!eliminado) {
    return res.status(404).json({ error: "Hallazgo no encontrado" });
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
