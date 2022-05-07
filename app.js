const express = require("express"),
    app = express(),
    setHeaders = require("./middleware/headers.js"),
    PORT = 5700,
    dataController = require("./controllers/get-data-controller.js");

app.use(setHeaders);
app.get("/", dataController);

app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
module.exports = app;

/* Простейший сервер. Получает GET запрос, контроллер дёргает функцию выполняющую запрос к БД и возвращает ответ клиенту. Была мысль реализовать пагинацию на стороне сервера, но бесплатные хостинги БД имеют ограничения по количеству запросов, поэтому решено было одним запросом брать все данные с сервера и осуществлять пагинацию на стороен клиента. */
