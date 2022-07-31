import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from '../ItemCount/ItemCount';
import './ItemProduct.scss'
import { Link } from 'react-router-dom';



const ItemProduct = ({data}) => {
    
  const {id ,title , price , img, stock} = data 

   
   return (

    <Link  style = {{textDecoration: "none", color: 'black'}}to = {`/product/${id}`} >
    <div className='item-product'>
          
          <img className='hatImage' src={img} alt="Hat img" />
          <p>{title}</p>
          <span className='price'>${price}</span>
           <ItemCount stock={stock}></ItemCount>
          <Button variant="outlined" endIcon={<ShoppingCartIcon/>}>
           Add to cart
         </Button>
   
       </div>
    </Link>
    
   
  )
}

export default ItemProduct

