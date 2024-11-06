const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = '';
    let contentType = 'text/html';

    switch (req.url) {
        case '/':
            filePath = path.join(__dirname, 'Views', 'index.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'Views', 'contact.html');
            break;
        default:
            filePath = path.join(__dirname, 'Views', '404.html');
            res.statusCode = 404;
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server Error");
        } else {
            res.writeHead(res.statusCode || 200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
