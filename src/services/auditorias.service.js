// ============================================================
// SERVICE: Auditorias
// Rol único: gestionar los datos de las auditorías.
// Opción A (básica): array en memoria dentro de este mismo archivo.
// Si mañana se migra a base de datos, SOLO este archivo cambia.
// ============================================================

// "Base de datos" en memoria
let auditorias = [
  {
    id: 1,
    fecha: "2026-06-01",
    area: "Financiera",
    responsable: "Sara Gómez",
    estado: "Completada",
    observaciones: "Auditoría cerrada sin novedades relevantes."
  },
  {
    id: 2,
    fecha: "2026-06-15",
    area: "Sistemas",
    responsable: "Brailey Pérez",
    estado: "En proceso",
    observaciones: "Revisión de accesos y permisos en curso."
  }
];

// Contador simple para generar nuevos ids
let nextId = 3;

function getAll() {
  return auditorias;
}

function getById(id) {
  return auditorias.find((a) => a.id === Number(id));
}

function create(data) {
  const nueva = {
    id: nextId++,
    fecha: data.fecha,
    area: data.area,
    responsable: data.responsable,
    estado: data.estado || "Pendiente",
    observaciones: data.observaciones || ""
  };
  auditorias.push(nueva);
  return nueva;
}

function update(id, data) {
  const auditoria = getById(id);
  if (!auditoria) return null;

  auditoria.fecha = data.fecha ?? auditoria.fecha;
  auditoria.area = data.area ?? auditoria.area;
  auditoria.responsable = data.responsable ?? auditoria.responsable;
  auditoria.estado = data.estado ?? auditoria.estado;
  auditoria.observaciones = data.observaciones ?? auditoria.observaciones;

  return auditoria;
}

function remove(id) {
  const index = auditorias.findIndex((a) => a.id === Number(id));
  if (index === -1) return false;
  auditorias.splice(index, 1);
  return true;
}

// Usado por el service de KPIs
function getRawData() {
  return auditorias;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getRawData
};
