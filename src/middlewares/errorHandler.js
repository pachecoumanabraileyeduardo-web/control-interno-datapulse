// ============================================================
// MIDDLEWARE: Manejo de errores
// - notFound: se activa cuando la ruta solicitada no existe (404)
// - errorHandler: atrapa cualquier error no controlado (500)
// ============================================================

function notFound(req, res, next) {
  res.status(404).json({
    error: "Recurso no encontrado",
    ruta: req.originalUrl
  });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: "Error interno del servidor",
    detalle: err.message
  });
}

module.exports = {
  notFound,
  errorHandler
};
