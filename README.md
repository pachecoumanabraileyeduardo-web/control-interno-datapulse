# Módulo Control Interno – Proyecto DataPulse

Evidencia: GA7-220501096-AA5-EV03 – Diseño y desarrollo de servicios web – proyecto
Aprendiz: Brailey [Apellido]
Ficha: [Número de ficha]

## Descripción

Servicio backend correspondiente al módulo **Control Interno** del proyecto DataPulse,
desarrollado en Node.js + Express, aplicando arquitectura por capas con separación
de responsabilidades:

- **Routes**: reciben la petición HTTP y la delegan al controlador.
- **Controllers**: gestionan `req`/`res`, validan entrada básica y devuelven respuestas.
- **Services**: contienen la lógica de negocio y los datos (Opción A: array en memoria).

## Instalación

```bash
npm install
npm run dev
```

El servidor corre por defecto en `http://localhost:3000`.

## Endpoints

### Auditorías (`/api/auditorias`)

| Método | Ruta                  | Descripción                          |
|--------|-----------------------|---------------------------------------|
| GET    | /api/auditorias       | Lista todas las auditorías            |
| GET    | /api/auditorias/:id   | Obtiene una auditoría por id          |
| POST   | /api/auditorias       | Crea una nueva auditoría              |
| PUT    | /api/auditorias/:id   | Actualiza una auditoría existente     |
| DELETE | /api/auditorias/:id   | Elimina una auditoría                 |

**Cuerpo esperado (POST/PUT):**
```json
{
  "fecha": "2026-07-20",
  "area": "Sistemas",
  "responsable": "Nombre Apellido",
  "estado": "Pendiente",
  "observaciones": "texto opcional"
}
```

### Hallazgos (`/api/hallazgos`)

| Método | Ruta                              | Descripción                                   |
|--------|------------------------------------|------------------------------------------------|
| GET    | /api/hallazgos                     | Lista todos los hallazgos                       |
| GET    | /api/hallazgos?auditoriaId=1       | Lista hallazgos de una auditoría específica     |
| GET    | /api/hallazgos/:id                 | Obtiene un hallazgo por id                      |
| POST   | /api/hallazgos                     | Crea un nuevo hallazgo                          |
| PUT    | /api/hallazgos/:id                 | Actualiza un hallazgo existente                 |
| DELETE | /api/hallazgos/:id                 | Elimina un hallazgo                             |

**Cuerpo esperado (POST/PUT):**
```json
{
  "auditoriaId": 1,
  "descripcion": "Descripción del hallazgo",
  "severidad": "Alta",
  "estado": "Abierto",
  "fechaDeteccion": "2026-07-20"
}
```

### KPIs / Dashboard (`/api/kpis`)

| Método | Ruta        | Descripción                                       |
|--------|-------------|-----------------------------------------------------|
| GET    | /api/kpis   | Devuelve indicadores calculados a partir de auditorías y hallazgos |

**Respuesta de ejemplo:**
```json
{
  "totalAuditorias": 2,
  "auditoriasCompletadas": 1,
  "auditoriasEnProceso": 1,
  "auditoriasPendientes": 0,
  "porcentajeCompletadas": 50,
  "totalHallazgos": 2,
  "hallazgosAbiertos": 1,
  "hallazgosCerrados": 1,
  "hallazgosPorSeveridad": { "Alta": 1, "Media": 0, "Baja": 1 }
}
```

### Manejo de errores

- Ruta inexistente → `404` con `{ "error": "Recurso no encontrado", "ruta": "..." }`
- Error interno inesperado → `500` con `{ "error": "Error interno del servidor", "detalle": "..." }`

## Arquitectura

```
src/
  routes/         -> define endpoints y los conecta con los controllers
  controllers/     -> maneja req/res, sin lógica de negocio
  services/        -> lógica de negocio y datos (array en memoria - Opción A)
  middlewares/     -> manejo centralizado de errores
  app.js           -> configuración y arranque del servidor Express
```
