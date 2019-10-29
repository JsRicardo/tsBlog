import express from "express";
import ArticleService from "../services/ArticleService";
import { ResponseHelper } from "./ResponseHelper";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await ArticleService.findById(articleId);
        ResponseHelper.sendData(article, res);
    } catch (e) {
        ResponseHelper.sendData(null, res);
    }
});

router.get('/', async (req, res) => {
    try {
        const payload = req.query;
        const result = await ArticleService.find(payload);
        ResponseHelper.sendPageData(result, res);
    } catch {
        ResponseHelper.sendData(null, res);
    }
})

export default router;