const express = require("express");
const hexRoutes = require("./routes/hex");

const app = express();
app.use(express.json());
app.use("/api", hexRoutes);

module.exports = app;
