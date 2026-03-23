import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import configObject from '../config.js';
import Navbar from '../components/Navbar.jsx';

const product = () => {

    const productId = useParams().id;
    const [productDetails, setProductDeatils] = useState({});

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const res = await fetch(`${configObject.BACKEND_URL}/product/getProductsById/${productId}`);
                const data = await res.json();
                if (!data) {
                    console.log("data is not present");
                }
                //console.log(data);
                setProductDeatils(data);
            } catch (err) {
                console.log(`Error while fetching in getProductsById ${err}`);
            }
        }

        fetchProduct();

    }, [productId]);

    return (
        <>
            <Navbar/>
            <div className="canvas min-h-screen bg-gray-100 py-10">

                <div className="flex justify-center text-4xl font-bold text-gray-800 mb-8">
                    Product Details
                </div>

                <div className="main-cont flex w-4/6 m-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    <div className="image-cont w-1/2 bg-gray-50 flex items-center justify-center p-6">
                        <img
                            className="max-h-[420px] object-contain hover:scale-105 transition duration-300"
                            src={productDetails.images?.[0]}
                            alt=""
                        />
                    </div>

                    <div className="desc-cont w-1/2 flex flex-col justify-between p-8">

                        <div className="space-y-6">

                            <div className="title-cont text-2xl font-semibold text-gray-800">
                                {productDetails.title}
                            </div>

                            <div className="price-cont text-3xl font-bold text-green-600">
                                ₹{productDetails.price}
                            </div>

                            <div className="description-cont text-gray-600 leading-relaxed">
                                {productDetails.description}
                            </div>

                        </div>

                        <div className="mt-8 flex gap-4">

                            <button className="buy-btn px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 cursor-pointer">
                                Buy Now
                            </button>

                            <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-black transition duration-200 cursor-pointer">
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default product

/* import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import configObject from '../config.js';

const product = () => {

    const productId = useParams().id;
    const [productDetails, setProductDeatils] = useState({});

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const res = await fetch(`${configObject.BACKEND_URL}/product/getProductsById/${productId}`);
                const data = await res.json();
                if (!data) {
                    console.log("data is not present");
                }
                console.log(data);
                setProductDeatils(data);
            } catch (err) {
                console.log(`Error while fetching in getProductsById ${err}`);
            }
        }

        fetchProduct();


    }, [productId]);

    return (
        <>
            <div className="canvas pt-6 h-screen">
                <div className="flex justify-center mt-4 text-4xl mb-3">
                    Product Details
                </div>
                <div className="main-cont flex border-2 w-4/6 m-auto h-4/6">
                    <div className="image-cont h-full w-1/2 border-2 border-black overflow-hidden">
                        <img className='h-full w-full object-cover' src={productDetails.images?.[0]} alt="" />
                    </div>
                    <div className="desc-cont h-full w-1/2 border-2 border-black flex flex-col">
                        <div className="title-cont ">Name : {productDetails.title}</div>
                        <div className="price-cont ">Price : {productDetails.price}</div>
                        <div className="description-cont ">Description : {productDetails.description}</div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="buy-btn px-6 py-2 bg-green-600 text-white rounded-xl cursor-pointer">
                        Buy
                    </button>
                </div>
            </div>
        </>
    )
}

export default product
 */