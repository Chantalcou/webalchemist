const express = require("express");
const router = express.Router();
const { sendChatMessage } = require("../controller/chatBotController");


router.post("/chatbot", sendChatMessage);



module.exports = router;
