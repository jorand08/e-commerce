import React, { useState } from 'react'



const ProductInfoId = ({product}) => {
    const [counter, setCounter] = useState(1)
const minusOne = () =>{
   const minus=counter-1
   minus >= 1 && setCounter(minus)
}
const plusOne = () => setCounter(counter + 1)
  return (
    <article className='product_info'>
        <h2 className='product_info_title'>{product?.title}</h2>
        <p className='product_info_description'>{product?.description}
        </p>
        <div className='card_product_container_price'>
            <h3 className='card_product_price_label product_info_label'>price</h3>
            <p className='card_product_price_number product_info_number'>$ {product?.price}</p>  
        </div>
        <div className='product_info_quantity_container'>
            <div onClick={minusOne} className='product_info_minus'>-</div>
            <div>{counter}</div>
            <div onClick={plusOne} className='product_info_plus'>+</div>
        </div>
        <button>add to Cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfoId