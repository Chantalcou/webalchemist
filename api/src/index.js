const path = require("path");
require("dotenv").config();
const cors = require("cors");
const express = require("express");

const chatBotRoutes = require("./routes/chatBotRoutes");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://webalchemist-1.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "application/json" })); // Por si viene como texto
app.use(bodyParser.raw({ type: "application/octet-stream" }));

// Ruta ChatBot
app.use("/", chatBotRoutes);

// Sirve el frontend React (solo en producción)
if (process.env.NODE_ENV === "production") {
  // Configura la ruta correcta para los archivos estáticos del frontend
  app.use(express.static(path.join(__dirname, "../../client_temp/build")));

  // Ruta catch-all para servir el frontend
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client_temp/build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});

// Middleware global para manejo de errores
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res
    .status(500)
    .json({ error: "Ha ocurrido un error interno en el servidor" });
});
