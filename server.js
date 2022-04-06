const http = require("http");
const fs = require("fs");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  fs.readFile("./data/SampleData - 12-1-22.json", "utf-8", (err, data) => {
    if (err) console.log(err);

    if (req.url === "/") {
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    }
  });
});

server.listen(5000, console.log("connected to port 5000"));

app.listen(port, () => console.log(`App is running on port ${port}`));
