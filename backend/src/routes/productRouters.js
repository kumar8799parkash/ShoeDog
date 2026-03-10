import express from 'express';
import Product from '../models/productModel.js'; 
import { getAllProducts } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/' , getAllProducts);

export {productRouter};