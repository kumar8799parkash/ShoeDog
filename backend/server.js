import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js';
import { productRouter } from './src/routes/productRouters.js';
import {categoryRouter} from './src/routes/categoryRouter.js';
import cors from 'cors'
import authRouter from './src/routes/authRoutes.js';
import cartRouter from './src/routes/cartRoutes.js';


/* import Category from './src/models/CategoryModel.js';
import User from './src/models/UserModel.js'
import Product from './src/models/productModel.js' */

dotenv.config();
connectDB();
const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world this is parker')
})

app.use('/cart' , cartRouter);
app.use('/auth' , authRouter);
app.use('/product' , productRouter);
app.use('/category' , categoryRouter);

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})