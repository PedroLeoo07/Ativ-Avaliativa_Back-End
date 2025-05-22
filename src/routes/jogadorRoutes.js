const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");
const upload = require("./../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get("/jogadores", jogadorController.getAllJogadores);
router.get("/jogadores/:id", jogadorController.getJogador);
router.post("/jogadors", upload.single("photo"), jogadorController.createJogador);
router.delete("/jogadores/:id", jogadorController.deleteJogador);
router.put("/jogadores/:id", jogadorController.updateJogador);

module.exports = router;