import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ImputSearch from './ImputSearch'
import ProductsCard from './ProductsCard'
import './style.css/homeScreen.css'
const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  console.log(products)


  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

console.log(products)

  return (
    <div className='home'>
      <ImputSearch/>
      <div className='products_container'>
        {
          products.map(product => (
            <ProductsCard
              key={product.id}
              product={product}
            />

          ))

        }
      </div>

    </div>
  )
}

export default HomeScreen