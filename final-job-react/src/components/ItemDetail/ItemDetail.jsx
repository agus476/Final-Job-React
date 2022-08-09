import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';






const ItemDetail = ({product}) => {


 const {title , price , img , stock}  = product

 const [quantitySelected, setQuantitySelected] = useState(0)

return(
<>
       <img src={img} alt="" />
        <div className="productDescription">
          <h2>{title}</h2>
          <span className="price"> ${price}</span>
          <span className="stock">Available stock = {stock}</span>
           

  

          
          {
            
              
            quantitySelected > stock? <Button>Buy</Button> : 
            <ItemCount   stock={stock}  setQuantitySelected = {setQuantitySelected} Productdata = {product}/>
             
          }
           
           </div>
         
</>




    
)







}

export default ItemDetail