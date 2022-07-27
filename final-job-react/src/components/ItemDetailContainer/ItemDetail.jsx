import React,{useState, useEffect} from "react";
import product from '../../utils/products.mock'
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./ItemDetail.scss"


const ItemDetail = () => {


const [Item, setItem] = useState([])


  const getItem  = () => new Promise ((resolve, reject)=>{
      setTimeout(() =>{
     
        resolve (product[1])

      }, 2000)
     
  })





  useEffect(() => {
    const ItemDetailContainer = async () => {

      try{
     
          const responseLog = await getItem()
          
          setItem(responseLog)
      }


      catch(error){

         console.log(error)

      }


  }


    ItemDetailContainer()
  
  }, [])

  

 



  return (
    <div className='item-detail-container'>
        <img src={Item.img} alt="" />
        <div className="productDescription">
          <h2>{Item.title}</h2>
          <span className="price"> ${Item.price}</span>
          <span className="stock">Available stock = {Item.stock}</span>
           <ItemCount stock={Item.stock}/>
           <Button variant="outlined" endIcon={<ShoppingCartIcon/>}>
        Add to cart
      </Button>
          </div>
         
           
  
      
          
    
               
         </div>
               
         
             



 


  )




}

export default ItemDetail