import Product from "../models/productModel.js";
import Category from "../models/CategoryModel.js";
import mongoose from "mongoose";

export const getAllProducts = async(req , res)=>{
    try{
        const products = await Product.find();
        if(!products){
            return res.status(400).json({message : "Products do not exist in the Product model!"});
        }
        res.send(products);
    }
    catch(err){
        res.status(500).json({message : "There is some internal error while fetching products from Product model"});
    }
}

export const getProductsById = async(req , res)=>{
    try{
        const productId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).json({message : "Invalid product ID"});
        }

        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : "Product not found!"});
        }
        res.status(200).json(product);
        
    }
    catch(err){
        res.status(500).json({message : "Internal server error while fetching product of given ObjectId"});
    }
}

export const getMenProducts = async(req , res)=>{
    try{
        const category = await Category.findOne({title : "Men"}).populate("products");
        if(!category){
            return res.status(400).json({message : "men category not found"});
        }
        res.status(200).json(category.products);
    }catch(err){
        res.status(500).json({message : "There is some internal error while fetching men products from Category model"});
    }
}

export const getWomenProducts = async(req , res)=>{
    try{
        const category = await Category.findOne({title : "Women"}).populate("products");
        if(!category){
            return res.status(400).json({message : "Women category not found"});
        }
        res.status(200).json(category.products);
    }catch(err){
        res.status(500).json({message : "There is some internal error while fetching women products from Category model"});
    }
}

export const getExclusiveProducts = async(req , res)=>{
    try{
        const category = await Category.findOne({title : "Exclusive"}).populate("products");
        if(!category){
            return res.status(400).json({message : "Exclusive category not found"});
        }
        res.status(200).json(category.products);
    }catch(err){
        res.status(500).json({message : "There is some internal error while fetching Exclusive products from Category model"});
    }
}

export const getSaleProducts = async(req , res)=>{
    try{
        const category = await Category.findOne({title : "Sale"}).populate("products");
        if(!category){
            return res.status(400).json({message : "Sale category not found"});
        }
        res.status(200).json(category.products);
    }catch(err){
        res.status(500).json({message : "There is some internal error while fetching sale products from Category model"});
    }
}

export const getWoodsProducts = async(req , res)=>{
    try{
        const category = await Category.findOne({title : "Woods"}).populate("products");
        if(!category){
            return res.status(400).json({message : "Woods category not found"});
        }
        res.status(200).json(category.products);
    }catch(err){
        res.status(500).json({message : "There is some internal error while fetching woods products from Category model"});
    }
}