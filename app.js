const express = require("express");
const dotenv = require("dotenv");
const resultRouter = require("./routes/resultRoutes");
const companyRouter = require("./routes/comanyRoutes");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

app.use("/students", resultRouter);
app.use("/company", companyRouter);

module.exports = app;
