import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Exclusive from './pages/exclusive.jsx'
import Men from './pages/men.jsx'
import Women from './pages/women.jsx'
import Woods from './pages/woods.jsx'
import Sale from './pages/sale.jsx'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'
import Profile from './pages/profile.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/men' element = {<Men/>}/>
      <Route path='/women' element = {<Women/>}/>
      <Route path='/exclusive' element = {<Exclusive/>}/>
      <Route path='/woods' element = {<Woods/>}/>
      <Route path='/sale' element = {<Sale/>}/>
      <Route  path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile/:userId'  element={<Profile/>}/>
    </Routes>
  )
}

export default App