const express = require("express");
const router = express.Router();
const { sendChatMessage } = require("../controller/chatBotController");


router.post("/", sendChatMessage);



module.exports = router;
