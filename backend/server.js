import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js';
import Category from './src/models/CategoryModel.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world this is parker')
})

app.get('/test-category', async (req, res) => {

    try {
        const newCategory = new Category({
            title: 'Men',
            slug: 'men',
            imageURL: 'https://pub-8cdcb94d090249c3aa8a0329e70ef215.r2.dev/categories/men.webp',
            description: 'Boots combine rugged durability with timeless style, making them perfect for both outdoor adventures and everyday wear. Crafted from premium materials with sturdy soles and comfortable lining, they provide excellent support and long-lasting performance. From casual outfits to semi-formal looks, men’s boots add confidence, strength, and versatility to any wardrobe.'
        })

        newCategory.save();

        console.log("new category saved successfully");
        res.json(newCategory);
    }catch(err){
        console.error(err);
        res.send("new category FAILED save");
    }
    
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})