import React,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar.jsx'
import PageImage from '../components/pageImage.jsx'

import BottomNavigation from '../components/BottomNavigation.jsx'
import ProductGrid from '../components/ProductGrid.jsx'


const exclusive = () => {

  return (
    <>
      <Navbar/>
      <PageImage category='exclusive'/>
      <BottomNavigation/>
      <ProductGrid category='exclusive'/>
    </>
  )
}

export default exclusive
