import React, {useState} from "react";
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './ItemCount.scss'



const ItemCount = ({stock}) => {
 
    let initialStock = stock
    const [inCart, setIncart] = useState(1) 


    const AddQ = () => {
    if (initialStock > inCart){
      setIncart( inCart + 1)
      } 
        
     }


  
      const RemoveQ = () => {
     if ( inCart > 1)
    setIncart( inCart - 1)
 
   }



   return(

    <div className='buyButtons'>
       <IconButton  onClick={RemoveQ} size="small">
        <RemoveIcon/>
       </IconButton>
       <span className='quantity'>{inCart}</span>
       <IconButton  onClick={AddQ} size="small">
        <AddIcon/>
       </IconButton>
       </div>


   )

}

export default ItemCount;