import { createContext, useState,  } from "react";


const CartContext = createContext()


const CartProvider = ({children}) => {

    const [contador, setcontador] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)
    const [cartProducts, setcartProducts] = useState([])

    


    
    
    
    const addToCart = (product) => {


        const productInCart = cartProducts.some( item => item.id === product.id )
        
         if (productInCart === true){

         const copyArray = cartProducts.map ((item) => {
            
            if(item.id === product.id){
                return {
                    ...item,
                    quantity: item.quantity + product.quantity,
                }

            }
            

           else{

              return item

            }})

            
            setcartProducts(copyArray)}


         else{
            setcartProducts([...cartProducts, product])
        

         }
        
        setcontador(contador + 1)
        settotalPrice(totalPrice + product.quantity * product.price)
        console.log(contador)
 
        


         

         


     
        
        
  
      }


      
    
    const delteAll = () => [
        setcartProducts ([]),
        setcontador(0),
        settotalPrice(0)
]

    
    
    
    const removefromCart = (id) =>{  

        const newCart = cartProducts.filter(product => product.id !== id)
        const prod = cartProducts.find(product => product.id == id)

        settotalPrice (totalPrice - prod.quantity * prod.price)
        setcontador(contador - prod.quantity)

        setcartProducts (newCart)

        



    }
    
    
    
    const data ={

    
        cartProducts,
        setcartProducts,
        addToCart,
        delteAll,
        removefromCart,
        totalPrice,
    }


    



return(

      <CartContext.Provider value={data}>

      {children}

      </CartContext.Provider>

)




}

export {CartContext};

export default CartProvider