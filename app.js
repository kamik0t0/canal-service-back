const express = require("express");
const path = require("path");
// const PORT = process.env.PORT || 5700;
const setHeaders = require("./middleware/headers.js");
const getDataController = require("./controllers/get-data-controller.js");

const app = express();

app.use(setHeaders);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", getDataController);
// app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;
