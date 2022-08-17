import React,{useState, useEffect} from "react";
import product from '../../utils/products.mock'
import "./ItemDetailContainer.scss"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {


const [Item, setItem] = useState([])
const {id} = useParams()
const filterId = product.find(product => product.id === Number(id) )


  const getItem  = () => new Promise ((resolve, reject)=>{
      setTimeout(() =>{
     
        resolve (filterId)
         
      }, 0)
     
  })


  
  
  

  useEffect(() => {
  
     const ItemAwait = async () => {

      try{
     
          const responseLog = await getItem()
        
          
          setItem(responseLog)
      }


      catch(error){

         console.log(error)

      }
       
     

  }


    ItemAwait()
  
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  

 
  


  return (
    <div className='item-detail-container'>
        
           
  <ItemDetail product = {Item}/>
      
          
    
    </div>
               
         
             



 


  )




}

export default ItemDetailContainer