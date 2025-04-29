const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const chatBotRoutes = require("./routes/chatBotRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globales
app.use(
  cors({
    origin: "https://webalchemist-2.onrender.com",
    // origin: "http://localhost:3000", // Alternativa para desarrollo local
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "application/json" }));
app.use(bodyParser.raw({ type: "application/octet-stream" }));

// Rutas de la API
app.use("/", chatBotRoutes);

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log(__dirname);
console.log(path.join(__dirname, "../../client/build"));
console.log("holaaaaaaaaaaaaaaaa");

// Sirve el frontend React (solo en producción)
if (process.env.NODE_ENV === "production") {
  // Configura la ruta correcta para los archivos estáticos del frontend
  app.use(express.static(path.join(__dirname, "../../client/build")));
  console.log(path.join(__dirname, "../../client/build"));

  // Ruta catch-all para servir el frontend
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
    console.log(path.join(__dirname, "../client/build"));
  });
}

// Middleware global de manejo de errores (después de todas las rutas)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res
    .status(500)
    .json({ error: "Ha ocurrido un error interno en el servidor." });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
  console.log(path.join(__dirname, "../../client/build"));
});
