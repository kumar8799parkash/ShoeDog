import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    cartId : {type : mongoose.Schema.Types.ObjectId , ref : 'Cart'},
    productId : {type : mongoose.Schema.Types.ObjectId , ref : 'Product' , required : true},
    quantity : {type : Number , required : true , min:1},
    price : {type : Number , required : true , min:0}
} , {timestamps : true})

const CartItem = mongoose.model('CartItem' , cartItemSchema);
export default CartItem;