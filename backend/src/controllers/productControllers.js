import Product from "../models/productModel.js";

export const getAllProducts = async(req , res)=>{
    try{
        const products = await Product.find();
        if(!products){
            return res.status(400).json({message : "Products do not exixt in the Product model!"});
        }
        res.send(products);
    }
    catch(err){
        res.status(500).json({message : "There is some internal error while fetching products from Product model"});
    }
}

