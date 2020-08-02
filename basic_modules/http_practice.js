// 제일 중요한듯..★★★
// 웹 어플리케이션 개발 기능들 제공 (웹 서버 기능)

const http = require("http");
const url = require("url");

const server = http.createServer(function(req, res) {

    const q = url.parse(req.url, true);

    res.writeHead(200, { "content-type": "text/html" });

    res.write("<!DOCTYPE html>");
    res.write("<title> Node.js http practice </title>");
    res.write("<h1>Life is so hard</h1>");

    switch (q.pathname) {
        case "/":
            res.write("<h2>Root</h2>");
            break;
        case "/test1":
            res.write("<h2>test1</h2>");
            break;
        case "/test2":
            res.write("<h2>test2</h2>");
            break;
    }
    if (Object.keys(q.query).length != 0) {
        for (let key in q.query) {
            res.write(`<h3>${key} : ${q.query[key]}</h3>`);
        }
    }

    res.write("</html>");
    res.end();
});

console.log("Server ON");
PORT = 1234
server.listen(PORT);
console.log(`http://localhost:${PORT}`);