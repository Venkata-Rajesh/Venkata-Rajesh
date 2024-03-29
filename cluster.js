const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

console.log(OS.cpus().length);

// when we run this file directly as cluster.js,
//the cluster.isMaster will be true, because it considers the main file as the master file.

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  // to create a worker process, we use the fork method of the cluster module.
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} is running`);
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
}
