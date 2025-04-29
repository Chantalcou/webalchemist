const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const chatBotRoutes = require("./routes/chatBotRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globales
app.use(cors({
  origin: "https://webalchemist-2.onrender.com",
  // origin: "http://localhost:3000", // Alternativa para desarrollo local
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "application/json" }));
app.use(bodyParser.raw({ type: "application/octet-stream" }));

// Rutas de la API
app.use("/", chatBotRoutes);

// Servir frontend React (solo en producción)
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "client", "build");
  app.use(express.static(clientBuildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

// Middleware global de manejo de errores (después de todas las rutas)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Ha ocurrido un error interno en el servidor." });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
