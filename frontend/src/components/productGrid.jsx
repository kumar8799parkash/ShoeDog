import React , {useState  , useEffect} from 'react'
import './productGrid.css'
import ProductCard from './ProductCard.jsx'

const productGrid = ({ category }) => {
    const [products, setProducts] = useState();
    const fetchProducts = async () => {
        try {
            const res = await fetch(`${configObject.BACKEND_URL}/product/${category}`);
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.log("Error in fetching menPage!!")
        }
    }

    fetchProducts();

    return (
        <>

        </>
    )
}

export default productGrid
