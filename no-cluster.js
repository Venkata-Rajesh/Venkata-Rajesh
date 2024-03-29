const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url == "slow-page") {
    for (let i = 0; i < 600000000; i++) {} // simulate a cpu work
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
});

server.listen(3000, () => console.log("Server is running on port 3000"));
