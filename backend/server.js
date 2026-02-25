import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/' ,(req , res)=>{
    res.send('Hello world this is parker')
})


app.listen(PORT , ()=>{
    console.log(`app is listening on ${PORT}`);
})