import express from "express";
import { getCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/:category' , getCategory);

export {categoryRouter};