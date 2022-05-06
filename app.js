const express = require("express");
const path = require("path");
const setHeaders = require("./middleware/headers.js");
// const PORT = process.env.PORT || 5700;
const indexRouter = require("./routes/index");
const getDataController = require("./controllers/get-data-controller.js");

const app = express();
app.use(setHeaders);
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/", getDataController);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;
