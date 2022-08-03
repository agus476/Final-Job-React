import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";




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
           

          {console.log("quantitySelected: ", quantitySelected)}

          
          {
            
              
            quantitySelected > 1 ? <Button><Link to = "/cart">Buy</Link></Button> : 
            <ItemCount   stock={stock} setQuantitySelected={setQuantitySelected}/>

          }
           
           </div>
         
</>




    
)







}

export default ItemDetail