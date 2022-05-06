const express = require("express"),
    app = express(),
    setHeaders = require("./middleware/headers.js"),
    PORT = 5700,
    dataController = require("./controllers/get-data-controller.js");

app.use(setHeaders);
app.get("/", dataController);

// app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;
