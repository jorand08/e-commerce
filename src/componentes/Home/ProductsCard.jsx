import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <article className='product_card_container'>
        <header className='product_card_container_img'>
            <img 
              className='product_card_img-back' 
              src= {product.productImgs[1]} 
              alt="imagen Producto" 
            />
            <img 
              className='product_card_img' 
              src= {product.productImgs[0]} 
              alt="imagen Producto" 
            />
            
        </header>
        <div className='card_product_body'>
          <h2 className='card_product_title'>{product.title}</h2>
          <div className='card_product_container_price'>
            <h3 className='card_product_price_label'>price</h3>
            <p className='card_product_price_number'>$ {product.price}</p>  
          </div>
          <button className='card_product_price_btn'>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
        
    </article>
  )
}

export default ProductsCard