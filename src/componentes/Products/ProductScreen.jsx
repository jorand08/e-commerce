import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import './style/productScreen.css'

const classImg=['', 'second-img', 'third-img']

const ProductScreen = () => {
  const [product, setProduct] =  useState()
  const [indexClass, setIndexClass] = useState(0)

  const {id} = useParams()
  
  useEffect(()=> {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  },[])

  

  const clickPrev = () => {
      const prevClass = indexClass - 1
    if (prevClass < 0){
      setIndexClass(classImg.length - 1)
    } else {
      setIndexClass(prevClass)
    }
  }

  const clickNext = () => {
    const nextClass = indexClass + 1
  if (nextClass >= classImg.length){
    setIndexClass(0)
  } else {
    setIndexClass(nextClass)
  }
}
     

  return (
  
    <div className='product'>
      <div className='slider'>
        <div onClick={clickPrev}  className='slider_prev'><i className="fa-solid fa-angle-left"></i></div>
        <div className={`slider_container ${classImg[indexClass]}`}>
          {
            product?.productImgs.map(imgSrc => (
              <img 
              key={imgSrc}
              src={imgSrc}
              alt="Imagen Producto"
              className='slider_imgs'
              />
            ))
          }
        </div>
        <div onClick={clickNext} className='slider_next'><i className="fa-solid fa-angle-right"></i></div>
        <div className='container_puntos'>
        <div 
          onClick={() => setIndexClass(0)} 
          className={indexClass === 0 ? 'puntos_active puntos'  : 'puntos' }>
        </div>
        <div 
          onClick={() => setIndexClass(1)} 
          className={indexClass === 1 ? 'puntos_active puntos' : 'puntos' }>
        </div>
        <div 
          onClick={() => setIndexClass(2)} 
          className={indexClass === 2 ? 'puntos_active puntos' : 'puntos' } >
        </div>
      </div>
      </div>
      <ProductInfoId product={product}/>
    </div>
  )
}

export default ProductScreen