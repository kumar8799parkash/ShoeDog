import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title : {type:String , required : true},
    description : {type : String},
    slug : {type : String , required : true , unique:true},
    images : {type : [String] ,validate : [arr => arr.length > 0, "At least one image required"] }, //[ validationFunction , errorMessage ]
    price : {type : Number , required : true , min : 0},
    category : {type : mongoose.Schema.Types.ObjectId , ref : 'Category' , required : true},
    tags : [String],
} , {timestamps : true})

const Product = mongoose.model('Product' , ProductSchema);
export default Product;