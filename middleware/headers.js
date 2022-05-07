module.exports = function (req, res, next) {
    // middleware для отправки разрешающих заголовков
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next();
};
