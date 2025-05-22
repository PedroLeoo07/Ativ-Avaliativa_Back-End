const express = require("express");
const router = express.Router();
const timeController = require("../controllers/timeController");
const apiKeyMiddleware = require("../config/apiKey");


router.use(apiKeyMiddleware);
// Middleware para verificar a chave da API em todas as rotas
router.get("times", timeController.getAllTimes);
router.get("/times/:id", timeController.getTimeById);
router.post("/times", timeController.createTime);
router.put("/times:id", timeController.updateTime);
router.delete("/times/:id", timeController.deleteTime);

module.exports = router;