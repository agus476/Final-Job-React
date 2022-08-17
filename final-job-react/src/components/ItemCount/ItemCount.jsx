import React, {useState, useContext} from "react";
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './ItemCount.scss'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from '@mui/material/Button';
import { CartContext } from "../../context/CartContext";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';





const ItemCount = ({productdata }) => {
 

  const { stock } = productdata;

  

const {addToCart, setcontador , contador} = useContext(CartContext)
    
    let initialStock = stock
    const [inCart, setIncart] = useState(1) 


    const HandleQ = (i) => {
    if (initialStock){
      setIncart( inCart + i)
      } 
        
     }

   const onAdd = () => {

    
    addToCart({...productdata, quantity: inCart})
    setcontador(contador + inCart)
    
    

   }

  
    


   return(
           <>
           
           <div className='buyButtons'>
       <IconButton  onClick ={() => HandleQ(-1)} size="small" disabled={ inCart === 1}>
        <RemoveIcon/>
       </IconButton>
       <span className='quantity'>{inCart}</span>
       <IconButton  onClick ={() => HandleQ(1)} size="small" disabled={ inCart === initialStock}>
        <AddIcon/>
       </IconButton>
        
       </div>
       

      <Button  onClick = {onAdd}variant="outlined" endIcon={<ShoppingCartIcon/>}>
          Add to cart</Button> 
      <Button  variant="outlined" startIcon={<ShoppingBagIcon />}><Link to ="/cart"style ={{textDecoration: "none", color: "Black"}}>Checkout</Link></Button>
           
           
           
           
           </>
    



   )

}

export default ItemCount;