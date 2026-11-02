
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/productCard';

export const Home = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); //if products not fetched

  useEffect(()=>{
    const FetchProducts = async ()=>{
      try{
        const res = await fetch('/api/products'); 
        const data = await res.json(); 
        setProducts(data.slice(0,4)); 
      }catch(error){
        console.error(error); 
      }finally{
        setLoading(false); 
      }
    }; 
    FetchProducts(); 
  },[]);

  return (
  <div className='home-container'>
    <div className='home-banner'>
    <h1>Welcome to Shopnest</h1>
    <p>Discover the best products at best prices</p>
    </div> 
    <div>
      <h2>featured products </h2>
      
      {loading ? (
        <div> Loading...</div>
      ) : (
        <div className='product-grid'>
          {products.map((product)=>(
            <ProductCard key = {product._id} product = {product}/>
          ))}
        </div>)
      }

  </div>
  </div>
  )
}
