import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const ItemDetail = ({product}) => {


 const {title , price , img , stock}  = product

return(
<>
       <img src={img} alt="" />
        <div className="productDescription">
          <h2>{title}</h2>
          <span className="price"> ${price}</span>
          <span className="stock">Available stock = {stock}</span>
           <ItemCount stock={stock}/>
           <Button variant="outlined" endIcon={<ShoppingCartIcon/>}>
        Add to cart
      </Button>
          </div>
         
</>




    
)







}

export default ItemDetail