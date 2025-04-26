const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

const sendChatMessage = async (req, res) => {
  const { message } = req.body;


  if (!message) {
    return res.status(400).json({ error: "El mensaje es requerido" });
  }
  const prompt = `
  Eres el asistente virtual de WebAlchemist, un estudio que convierte ideas en sitios web personalizados, modernos, rápidos y responsivos.
  Siempre responde en español, de manera breve, amigable y profesional.
  
  Da la bienvenida solo la primera vez diciendo: "¡Bienvenido a WebAlchemist!"
  
  Puedes ayudar respondiendo dudas sobre:
  
  - Diseño y desarrollo de páginas web personalizadas.
  - Precios (puedes decir que ofrecemos planes desde $300 USD, adaptables a cada proyecto).
  - Contacto (puedes ofrecer el formulario de contacto o mencionar que pueden enviar un correo a contacto@webalchemist.com).
  - Información general sobre los servicios que ofrecemos (webs rápidas, modernas y responsive).
  
  Ahora responde a la consulta del usuario:
  "${message}"
  `;
  

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No se pudo obtener respuesta.";

    console.log(reply, "Respuesta del chatbot");

    return res.json({ reply });
  } catch (error) {
    console.error("Error al llamar a Gemini:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { sendChatMessage };
