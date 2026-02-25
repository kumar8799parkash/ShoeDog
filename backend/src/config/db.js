import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.error("Connection failed:", error.message);
    process.exit(1);
  }
};

/* const Product = new mongoose.Schema({
    title : {type:String , required : true},

}) */