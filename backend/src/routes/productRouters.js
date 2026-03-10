import express from 'express';
import Product from '../models/productModel.js'; 
import { getAllProducts , getMenProducts , getWomenProducts , getExclusiveProducts , getWoodsProducts , getSaleProducts } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/' , getAllProducts);
productRouter.get('/men' , getMenProducts);
productRouter.get('/exclusive' , getExclusiveProducts);
productRouter.get('/sale' , getSaleProducts);
productRouter.get('/woods' , getWoodsProducts);

export {productRouter};