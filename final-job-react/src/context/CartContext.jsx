import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({children}) => {


    const [Cartproducts, setCartproducts] = useState([])

    const data ={
  
        Cartproducts,
        setCartproducts


    }



return(

      <CartContext.Provider value={data}>

      {children}

      </CartContext.Provider>

)




}

export {CartContext};

export default CartProvider