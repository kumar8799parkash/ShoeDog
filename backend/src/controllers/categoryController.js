import Category from "../models/CategoryModel.js";
import mongoose from "mongoose";

export const getCategory = async (req , res) => {
    try {
        const currCategory = req.params.category;
        const categoryObj = await Category.findOne({ slug: currCategory });
        if(!currCategory){
            return res.status(400).json({message : "category not found"})
        }
        return res.status(200).json(categoryObj);
    }
    catch (err) {
        return res.status(500).json({message : `Error in backend in category controller ${err}`});
    }
}