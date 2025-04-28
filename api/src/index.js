const path = require("path");
require("dotenv").config();
const cors = require("cors");
const express = require("express");

const chatBotRoutes = require("./routes/chatBotRoutes");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; // Asegúrate de que 'PORT' cd ../esté usando process.env.PORT en producción.

app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(
  cors({
    origin: "https://webalchemist-2.onrender.com",

    // origin: "http://localhost:3000",
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
  // Cambia esta ruta para apuntar a la carpeta 'build' correcta
  app.use(express.static(path.join(__dirname, "client/build")));

  // Ruta catch-all para servir el frontend
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
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
