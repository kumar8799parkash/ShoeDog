import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../assets/svgs/cart.svg'

const ProductCard = ({productId , category , images , title , price}) => {
    const navigate = useNavigate();
    const handleProductOpen = (objectId)=>{
        navigate(`product/${objectId}`);
    }
    return (
        <div onClick={() => { handleProductOpen(productId) }} className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden cursor-pointer">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">{category}</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={images[0]} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">{title}</div>

            <div className="item-price-cart-cont h-[9%] flex">
                <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;{price}</div>
                <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
        </div>
    )
}

export default ProductCard