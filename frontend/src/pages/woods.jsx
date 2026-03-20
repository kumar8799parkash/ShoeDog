import React,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar.jsx'
import PageImage from '../components/pageImage.jsx'

import BottomNavigation from '../components/BottomNavigation.jsx'
import ProductGrid from '../components/ProductGrid.jsx'


const woods = () => {

  return (
    <>
      <Navbar/>
      <PageImage category='woods'/>
      <BottomNavigation/>
      <ProductGrid category='woods'/>
    </>
  )
}

export default woods
