import React, {useContext} from "react";
import callout from "../../assets/callout.png"
import { CartContext } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import "../Cart/Cart.scss"





const Cart  = () =>{

const {cartProducts ,delteAll, removefromCart, totalPrice, contador } = useContext(CartContext)

const buttons = [
  <Button key="+">+</Button>,
  <Button key="a">{contador}</Button>,
  <Button key="-">-</Button>,
];




return (

 <>
 
    <div className="cart-container">
     <div className="cart-left">
     <h1>CART</h1>
     <div className="callout">
          <img src= {callout} alt="" />
          <h4>View rewards and get free shipping and returns with this order.</h4>
          <a href="/">SING IN / JOIN </a>
    </div>
     
    <div className="item-detail">
    {
                          
                
                          cartProducts.length > 0 ?
                          
                          cartProducts.map((product)  =>
                          (
                                     
                                      
                                     
                                   <div className='item-cart' key={product.id}>
                                      <img src={`${product.img}`} alt="" />
                                      <div className='cart-product__details'>
                                          <p>{product.title}</p>
                                          <p>TAMAÑO : XS</p>
                                          <p>quantity : {product.quantity}</p>
                                      </div>
                                      <div className="buttons-selection">
                                        
                                        <Box sx={{display: 'flex','& > *': {m: 1,},}}>
                                            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">{buttons}
                                            </ButtonGroup>
                                            
                                            </Box>

                                        </div>
                                      <div className='cart-product__details'>
                                          <p>$ {product.price}</p>
                                      </div>
                                      <div className='cart-product__action'>
                                        
                                          <IconButton onClick={()=>removefromCart(product.id)}><DeleteIcon /></IconButton>
                                      </div>
          
                                  </div>
                                 
                                      
                        
                   ))
          
                          : <div className='cartEmpty'>
                            
                            <h1>Su carrito esta vacio</h1>
                            <RemoveShoppingCartIcon/>
                            
                          
                          
                          </div>
                           }      
          



    </div>


     </div>
     

     
     <div className="cart-rigth">
       <div className="sumary">
       <h1>ORDER SUMARY</h1>
        <div>
        <span>SUBTOTAL {totalPrice} </span>
        <span>SHIPPING</span>
        </div>
        <div>TOTAL</div>

       
        
        



       </div>





     </div>

      




    </div>
 </>


)


}

export default Cart