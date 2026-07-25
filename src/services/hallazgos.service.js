// ============================================================
// SERVICE: Hallazgos
// Rol único: gestionar los datos de los hallazgos de auditoría.
// Opción A (básica): array en memoria dentro de este mismo archivo.
// ============================================================

let hallazgos = [
  {
    id: 1,
    auditoriaId: 1,
    descripcion: "Falta firma de responsable en acta financiera.",
    severidad: "Baja",
    estado: "Cerrado",
    fechaDeteccion: "2026-06-02"
  },
  {
    id: 2,
    auditoriaId: 2,
    descripcion: "Usuarios con permisos de administrador sin justificación.",
    severidad: "Alta",
    estado: "Abierto",
    fechaDeteccion: "2026-06-16"
  }
];

let nextId = 3;

function getAll() {
  return hallazgos;
}

function getById(id) {
  return hallazgos.find((h) => h.id === Number(id));
}

function getByAuditoriaId(auditoriaId) {
  return hallazgos.filter((h) => h.auditoriaId === Number(auditoriaId));
}

function create(data) {
  const nuevo = {
    id: nextId++,
    auditoriaId: Number(data.auditoriaId),
    descripcion: data.descripcion,
    severidad: data.severidad || "Media",
    estado: data.estado || "Abierto",
    fechaDeteccion: data.fechaDeteccion || new Date().toISOString().split("T")[0]
  };
  hallazgos.push(nuevo);
  return nuevo;
}

function update(id, data) {
  const hallazgo = getById(id);
  if (!hallazgo) return null;

  hallazgo.descripcion = data.descripcion ?? hallazgo.descripcion;
  hallazgo.severidad = data.severidad ?? hallazgo.severidad;
  hallazgo.estado = data.estado ?? hallazgo.estado;
  hallazgo.fechaDeteccion = data.fechaDeteccion ?? hallazgo.fechaDeteccion;

  return hallazgo;
}

function remove(id) {
  const index = hallazgos.findIndex((h) => h.id === Number(id));
  if (index === -1) return false;
  hallazgos.splice(index, 1);
  return true;
}

// Usado por el service de KPIs
function getRawData() {
  return hallazgos;
}

module.exports = {
  getAll,
  getById,
  getByAuditoriaId,
  create,
  update,
  remove,
  getRawData
};
