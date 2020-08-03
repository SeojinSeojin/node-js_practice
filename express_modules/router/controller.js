module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("root.html");
    });

    app.get("/test1", function(req, res) {
        res.send("TEST1");
    });
};