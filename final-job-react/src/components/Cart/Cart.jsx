import React, {useContext , useState} from "react";
import callout from "../../assets/callout.png"
import { CartContext } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import "../Cart/Cart.scss"
import Modal from '../Modal/Modal'
import { collection, addDoc} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'






const Cart  = () =>{

const [showModal, setshowModal] = useState(false)
const {cartProducts ,delteAll, removefromCart, totalPrice} = useContext(CartContext)
const [buySucces , setbuySucces] = useState()
const shipping = 500

const [order] = useState({
      items: cartProducts.map((product) =>{
        return{
           id: product.id,
           title: product.title,
           price: product.price
          }}),
      
       buyer: {},
       date: new Date().toLocaleString(),
      total: totalPrice
})

const [formData, setformdata] = useState({

  name: '',
  phone:'',
  email:'',


})


const handleModal = (handle) =>{

handle === true ? setshowModal(true) : setshowModal(false) 



}

const handleChange = (e) =>{

  setformdata({...formData, [e.target.name] : e.target.value,})

}



const sendData = (e) =>{
      
      e.preventDefault()

   

       pushData({...order, buyer: formData})

}

const pushData = async (newOrder) =>{

  const collectionOrden = collection(db,'orders')
  const orderDoc = await addDoc(collectionOrden, newOrder)
  console.log("Orden generada", orderDoc)
  setbuySucces(orderDoc.id)
  
 
    

}

console.log(buySucces)





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
                                         
                                      </div>
                                      <div className="buttons-selection">
                                        
                                        <Box sx={{display: 'flex','& > *': {m: 1,},}}>
                                            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
                                              <Button>+</Button>
                                              <Button>{product.quantity}</Button>
                                              <Button>-</Button>
                                            </ButtonGroup>
                                            
                                            </Box>

                                        </div>
                                      <div className='cart-product__details'>
                                          <p>$ {product.price * product.quantity}</p>
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
       <div>Items
         {cartProducts.map((product)=>(
                <div className="sumary__item"> 

                      <span> {product.title} {product.price}</span>

                </div>
             
           

         ))}

       </div>
        <div><span>SUBTOTAL {totalPrice} </span>
        <span>SHIPPING {shipping}</span>
        </div>
        
        <div>TOTAL {totalPrice + shipping }</div>

       
        
        



       </div>





     </div>

  

      

     
     { showModal && 
     <Modal title={"DATOS DE CONTACTO"} close={handleModal}>
      

        {buySucces ? (

          <>

           <h2>Su orden se genero correctamente</h2>
           <h3>El numero de su orden es {buySucces} </h3>

          </>
         
        ):(
            
          <form onSubmit={sendData}>
          <input 
          type="text" 
          name = 'name' 
          onChange={handleChange}
          placeholder="Name"
          value = {formData.name}
          />
          
          
          
          <input 
          type="number" 
          onChange={handleChange}
          name ='phone'
          placeholder="Phone" 
          value = {formData.phone}
          />
          
          
          
          <input 
          type="email" 
          onChange={handleChange}
          name ='email' 
          placeholder="Your e-mail adress" 
          value = {formData.email}
          />
          
          
          
          <Button type="sumbit">Send</Button>
         

           </form>

        )}
     

   </Modal>

    }

      


    </div>
    
    { cartProducts.length > 0 && 

<div className='extraButtons'>

<Button onClick = {delteAll}>delete</Button>
<Button onClick={() => handleModal(true)}>Go to pay</Button>
     
</div>



}
 

</>
)


}

export default Cart