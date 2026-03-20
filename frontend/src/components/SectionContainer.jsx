import React, { useEffect } from 'react'
import { useState } from 'react'
import './SectionContainer.css'
import exclusiveImage from '../assets/site-images/exclusive-images/exclusive1.webp'
import ProductCard from './ProductCard.jsx'
import cartLogo from '../assets/svgs/cart.svg'
import configObject from '../config.js';
import { useNavigate } from 'react-router-dom'

const SectionContainer = (props) => {
  const navigate = useNavigate();
  const category = props.category;
  const [products , setProducts] = useState([]);
  
  const getProducts = async ()=>{
    try{  
      const res = await fetch(`${configObject.BACKEND_URL}/product/${category}`);
      if(!res){
        console.log("res not caught in sectionContainer");
      }
      const data = await res.json();
      if(!data){
        console.log("data not caught in sectionContainer");
      }
      setProducts(data);
    }
    catch(err){
      console.log(`Error occured in section container in category ${category} the error is : ${err}`);
    }
  }

  function handleProductOpen(objectId){
    navigate(`product/${objectId}`);
  }
  
  useEffect(()=>{
    getProducts();
  } , [category]);
  

  return (
    <div>
      <div className="section-cont m-auto w-[83vw] h-[54vh] mb-10">
        <div className="section-heading-cont font-bold text-2xl h-[12%]">{props.heading}</div>
        <div className="section-content-cont h-[88%] flex justify-between">

          {/* {products.map(product=>{
            return (<div key={product._id} onClick={()=>{handleProductOpen(product._id)}} className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden cursor-pointer">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">{category}</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={product.images[0]} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">{product.title}</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;{product.price}</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>)
            
          })} */}


          {products.slice(0,5).map(product=>{
            return (<ProductCard key={product._id} productId={product._id} category={category} images={product.images} title={product.title} price={product.price}/>)
            
          })}
          
          
        </div>
      </div>
    </div>
  )
}

export default SectionContainer
