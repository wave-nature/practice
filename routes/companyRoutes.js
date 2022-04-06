const express = require("express");
const { companyDetails } = require("../controllers/companyController");

const router = express.Router();

router.post("/details", companyDetails);

module.exports = router;
