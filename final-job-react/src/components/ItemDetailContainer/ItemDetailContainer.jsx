import React,{useState, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.scss"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";


const ItemDetailContainer = () => {


const [Item, setItem] = useState([])
const {id} = useParams()



  const getItem  = async() => {

   const docRef = doc(db, "products", id)
   const docSnap = await getDoc(docRef)
   const product = {...docSnap.data(),id: docSnap.id }

    return product
  }


  
  
  

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