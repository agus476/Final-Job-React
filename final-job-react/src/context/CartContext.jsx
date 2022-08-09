import { createContext, useState,  } from "react";


const CartContext = createContext()


const CartProvider = ({children}) => {


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



         

         


     
        
        
  
      }


      
    
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