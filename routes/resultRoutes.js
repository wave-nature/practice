const express = require("express");
const { calcPercentage } = require("../controllers/resultController");

const router = express.Router();

router.post("/result", calcPercentage);

module.exports = router;
