import express from "express";
import methodOverride from "method-override";
import config from "config";
import router from "./routes";
import { ErrorHandlingMiddleware, RequestLoggingMiddleware } from "./middleware";

const app = express();
const port: number = config.get("server.port") || 3000;

// 静的ファイルのルーティング設定
app.use(express.static("public"));

// POSTリクエストのボディをパースする設定
app.use(express.urlencoded({ extended: true }));

// ミドルウェア設定
app.use(RequestLoggingMiddleware);

// ルーティング定義
app.use(router);

// 例外ハンドリングミドルウェア設定(ルーティング定義の後ろに書く必要がある)
app.use(methodOverride());
app.use(ErrorHandlingMiddleware);

app.listen(port, () => {
  console.log(`Web Server started: http://localhost:${port}`);
});
