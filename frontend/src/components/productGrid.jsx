import React, { useState, useEffect } from 'react'
import configObject from '../config.js'
import './ProductGrid.css'
import ProductCard from './ProductCard.jsx'

const productGrid = ({ category }) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const res = await fetch(`${configObject.BACKEND_URL}/product/${category}`);
            const data = await res.json();
            setProducts(data);
            //console.log(data);
        } catch (err) {
            console.log(`Error in fetching menPage!! : ${err}`);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [category]);

    return (
        <>
            <div className="canvas">
                <div className="flex-cont m-auto w-[83vw] flex justify-between items-center flex-wrap gap-y-4">
                    {
                        products.map((product)=>{
                            return(
                            <ProductCard key={product._id} productId={product._id} category={category} images={product.images} title={product.title} price={product.price}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default productGrid
