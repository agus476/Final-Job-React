import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';



 


export  function CartWidget() {
  return (
    <>


      <IconButton color="inherit"  component="label" size= "large">
        <Badge badgeContent = {4} color = "secondary">
        <ShoppingCartIcon/>
        </Badge>
      
      </IconButton>
     

    </>
      
    
  )
}
