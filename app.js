const http = require("http"),
    https = require("https"),
    express = require("express"),
    app = express();

const path = require("path");
const setHeaders = require("./middleware/headers.js");
const PORT = 5700;
const indexRouter = require("./routes/index.js");
const dataController = require("./controllers/get-data-controller.js");

// const app = express();
app.use(setHeaders);
// app.use(express.static(path.join(__dirname, "public")));
app.get("/", dataController);
// app.use("/", indexRouter);
http.createServer(app).listen(80);
https.createServer({}, app).listen(443);
// app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;
