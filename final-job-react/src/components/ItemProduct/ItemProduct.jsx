import React from 'react'

import './ItemProduct.scss'
import { Link } from 'react-router-dom';



const ItemProduct = ({data}) => {
    
  const {id ,title , price , img,} = data 

   
   return (

    <Link  style = {{textDecoration: "none", color: 'black'}}to = {`/product/${id}`} >
    <div className='item-product'>
          <div className='hatImage'>
          <img  src={img} alt="Hat img" />
          </div>
          
          <p>{title}</p>
          <span className='price'>${price}</span>
           
        
   
       </div>
    </Link>
    
   
  )
}

export default ItemProduct

