import React,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar.jsx'
import PageImage from '../components/pageImage.jsx'

import BottomNavigation from '../components/BottomNavigation.jsx'
import ProductGrid from '../components/ProductGrid.jsx'


const sale = () => {

  return (
    <>
      <Navbar/>
      <PageImage category='sale'/>
      <BottomNavigation/>
      <ProductGrid category='sale'/>
    </>
  )
}

export default sale
