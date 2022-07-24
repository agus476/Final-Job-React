import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from '../ItemCount/ItemCount';
import './ItemProduct.scss'



const ItemProduct = ({data}) => {
    
  const {title , price , img, stock} = data 

   
   return (
    <div className='item-product'>
          
       <img className='hatImage' src={img} alt="Hat img" />
       <p>{title}</p>
       <span className='price'>${price}</span>
        <ItemCount stock={stock}></ItemCount>
       <Button variant="outlined" endIcon={<ShoppingCartIcon/>}>
        Add to cart
      </Button>

    </div>
   
  )
}

export default ItemProduct