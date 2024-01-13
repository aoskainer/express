const express = require("express");
const config = require("config");

const app = express();
const port = config.get("server.port") || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Web Server started: http://localhost:${port}`);
});
