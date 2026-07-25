const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Prefijo base de la API
app.use("/api", routes);

// Ruta de verificación rápida
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API Control Interno - DataPulse funcionando" });
});

// Manejo de errores (siempre al final)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor Control Interno corriendo en http://localhost:${PORT}`);
});
