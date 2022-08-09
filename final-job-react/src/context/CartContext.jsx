import { createContext, useState,  } from "react";


const CartContext = createContext()


const CartProvider = ({children}) => {


    const [cartProducts, setcartProducts] = useState([])

    

    const addToCart = (product) => {

        
        setcartProducts([...cartProducts, product])
        
  
      }


      console.log(cartProducts)
    
    const delteAll = () => [setcartProducts ([])]

    
    
    
    const removefromCart = (id) =>{  

        const newCart = cartProducts.filter(product => product.id !== id)

        setcartProducts (newCart)


    }
    
    
    
    const data ={
  
        cartProducts,
        setcartProducts,
        addToCart,
        delteAll,
        removefromCart,
    }


    



return(

      <CartContext.Provider value={data}>

      {children}

      </CartContext.Provider>

)




}

export {CartContext};

export default CartProvider