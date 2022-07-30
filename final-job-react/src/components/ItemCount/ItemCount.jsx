import React, {useState} from "react";
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './ItemCount.scss'



const ItemCount = ({stock}) => {
 
    let initialStock = stock
    const [inCart, setIncart] = useState(1) 


    const HandleQ = (i) => {
    if (initialStock){
      setIncart( inCart + i)
      } 
        
     }


  
    


   return(

    <div className='buyButtons'>
       <IconButton  onClick ={() => HandleQ(-1)} size="small" disabled={ inCart === 1}>
        <RemoveIcon/>
       </IconButton>
       <span className='quantity'>{inCart}</span>
       <IconButton  onClick ={() => HandleQ(1)} size="small" disabled={ inCart === initialStock}>
        <AddIcon/>
       </IconButton>
       </div>


   )

}

export default ItemCount;