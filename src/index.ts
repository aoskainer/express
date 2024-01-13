import express from "express";
import config from "config";
import router from "./routes";

const app = express();
const port: number = config.get("server.port") || 3000;

// ルーティング定義
app.use(router);

app.listen(port, () => {
  console.log(`Web Server started: http://localhost:${port}`);
});
