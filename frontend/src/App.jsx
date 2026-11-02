import React from 'react'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Home} from './pages/Home'
import ReturnPolicy from './pages/ReturnPolicy';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import ProductDetails from './pages/ProductDetails'; 

export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/disclaimer' element={<Disclaimer/>}></Route>
        <Route path='/return' element={<ReturnPolicy/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/products/:id' element ={<ProductDetails/>}></Route>

      </Routes> 
      <Footer/>     
    </Router>
      )
}



