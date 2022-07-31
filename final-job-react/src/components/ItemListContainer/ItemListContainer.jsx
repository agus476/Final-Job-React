import React, {useState, useEffect}from 'react'
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



export  function ItemListContainer({article}) {

 const [listClothes, setlistClothes] = useState([])
 const {categoryid} = useParams()
 const filterByCategory = products.filter((products) => products.category === categoryid)
 
 


  const getProducts  = () => new Promise ((resolve, reject)=>{
      setTimeout(() =>{

        if (categoryid === "Hats" || categoryid === "T-shirts"){

            resolve (filterByCategory)

        }


        
        else{
              resolve (products)
          
        }
        

      }, 2000)
     
  })





  useEffect(() => {
    const getProduct = async () => {

      try{
     
          const responseLog = await getProducts()
          
          setlistClothes(responseLog)
      }


      catch(error){

         console.log(error)

      }


  }


    getProduct()
  
  }, )

  

 



  return (
    <div className='list-products'>
          <h2 className='ClotheName'>{article}</h2>
             
          <div className='ItemContainer'>
                
                <ItemList dataProducts={listClothes}/>
    
               
         </div>
               
         
             



          
    </div>


  )
}
