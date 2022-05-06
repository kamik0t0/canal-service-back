const express = require("express");
const path = require("path");
const setHeaders = require("./middleware/headers.js");
// const PORT = process.env.PORT || 5700;
const indexRouter = require("./routes/index");

const app = express();
app.use(setHeaders);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;
