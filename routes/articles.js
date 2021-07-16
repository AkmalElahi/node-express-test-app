import express from "express";
import {Article} from '../models/article.js';

import { getArticles, createArticle, getArticle, deleteArticle, updateArticle } from '../controllers/articles.js';

const router = express.Router();

router.get('/', getArticles);

router.post('/', createArticle);

router.get('/:id', getArticle);

router.delete('/:id', deleteArticle);

router.patch('/:id', updateArticle);

export default router; 