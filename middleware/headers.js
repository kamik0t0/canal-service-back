module.exports = function (req, res, next) {
    //  - получать запросы с другого порта только для моего приложения
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
        // "https://deploy-test-business-assist.herokuapp.com"
        // "https://kamik0t0.github.io/CalanlService-test-task-front/"
        // "http://localhost:3000"
    );
    // res.setHeader("Access-Control-Allow-Origin", "https://kamik0t0.github.io");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // - обрабатывать указанные типы запросов
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );
    next();
};
