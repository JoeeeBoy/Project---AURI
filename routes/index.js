const { Router } = require("express");
const { appendFile } = require("fs");

const router = Router();

app.use("/user", require("./user.route.js"))

module.exports = router;
