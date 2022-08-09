import React, {useState, useContext} from "react";
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './ItemCount.scss'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from '@mui/material/Button';
import { CartContext } from "../../context/CartContext";





const ItemCount = ({stock , productdata }) => {
 

  

const {addToCart} = useContext(CartContext)
    
    let initialStock = stock
    const [inCart, setIncart] = useState(1) 


    const HandleQ = (i) => {
    if (initialStock){
      setIncart( inCart + i)
      } 
        
     }

   const onAdd = () => {

    
    addToCart({...productdata, quantity: inCart})
    
    
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
           
           
           
           
           </>
    



   )

}

export default ItemCount;