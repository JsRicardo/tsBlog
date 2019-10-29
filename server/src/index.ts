import express from "express";
import ArticleRoute from "./routes/ArticleRoute";

const app = express();

app.use(express.json()); // 使用中间件解析请求消息体中的JSON参数

app.use("/api/article", ArticleRoute);

app.listen(12306);