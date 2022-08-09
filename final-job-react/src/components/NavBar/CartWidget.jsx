import React, {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import "../NavBar/CartWidget.scss"
import { CartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export  function CartWidget() {


   const {cartProducts ,delteAll, removefromCart } = useContext(CartContext)


 

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };


  return (
    <>


      <IconButton color="inherit"  component="label" size= "large">
        <Badge badgeContent = {cartProducts.length} color = "secondary">
        <ShoppingCartIcon aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}/>
        </Badge>


        <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            > 
                 
                 <div className='titleContainer'> <span className='name'> Mi carrito de compras</span></div>
           
              
                {
                          
                
                cartProducts.length > 0 ?
                
                cartProducts.map((product)  =>
                (
                           
                            
                           
                         <div className='item-cart-product' key={product.id}>
                            <img src={`${product.img}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                                <p>TAMAÑO : XS</p>
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



{ cartProducts.length > 0 &&

<div className='deleteAll'>
<Button  onClick = {delteAll}variant="outlined" startIcon={<DeleteIcon />}>Delete all</Button>
</div>



}

     
                
                         

        
               
            </Menu>

            
    
      
      </IconButton>

      
     

    </>
      
    
  )
}
