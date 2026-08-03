const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 8000);

const server = http.createServer((req, res) => {
  const requested = req.url === "/" ? "index.html" : req.url.split("?")[0].replace(/^\/+/, "");
  const filePath = path.join(root, requested);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving at http://127.0.0.1:${port}`);
});
