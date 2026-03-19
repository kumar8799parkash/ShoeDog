import express from 'express';
import Product from '../models/productModel.js'; 
import { getAllProducts , getMenProducts , getWomenProducts , getExclusiveProducts , getWoodsProducts , getSaleProducts  , getProductsById , getMenPage} from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/' , getAllProducts);
productRouter.get('/getProductsById/:id' , getProductsById);
productRouter.get('/men' , getMenProducts);
productRouter.get('/menPage' , getMenPage);
productRouter.get('/exclusive' , getExclusiveProducts);
productRouter.get('/sale' , getSaleProducts);
productRouter.get('/woods' , getWoodsProducts);
productRouter.get('/women' , getWomenProducts);

export {productRouter};