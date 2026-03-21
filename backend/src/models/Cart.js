import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : 'User' , required:true , unique:true},
    cartItems : [{type : mongoose.Schema.Types.ObjectId , ref : 'CartItem'}]
} , {timestamps : true})

const Cart = mongoose.model('Cart' , cartSchema);
export default Cart;

/*
SYNTAX FOR ARRAY VALUE, ObjectId type and all

Explanation fo : products : [{ type : mongoose.Schema.Types.ObjectId , ref : 'Product' }]

1. products: []
means → products will store multiple values

2. Inside Array → { type: ..., ref: ... }
Each element of the array is an object describing the schema of each item

3. type : mongoose.Schema.Types.ObjectId
👉 This defines the datatype
ObjectId = MongoDB’s unique identifier

4. ref : 'Product'
👉 This tells Mongoose: "These ObjectIds belong to the Product model"
This is used for:
🔥 populate()       ****populate() will not work without ref****

👉 Without ref, Mongoose does NOT know:
"Which collection should I fetch data from?"
So it cannot perform the join.

*/



