import React, {useState, useEffect}from 'react'
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'



export  function ItemListContainer({article}) {

 const [listClothes, setlistClothes] = useState([])


  const getProducts  = () => new Promise ((resolve, reject)=>{
      setTimeout(() =>{
     
        resolve (products)

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
  
  }, [])

  

 



  return (
    <div className='list-products'>
          <h2 className='ClotheName'>{article}</h2>
             
          <div className='ItemContainer'>
                
                <ItemList dataProducts={listClothes}/>
    
               
         </div>
               
         
             



          
    </div>


  )
}
