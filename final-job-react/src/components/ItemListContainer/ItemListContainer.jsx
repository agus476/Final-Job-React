import React, {useState, useEffect}from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where , query} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'


export  function ItemListContainer({article}) {

 const [listClothes, setlistClothes] = useState([])
 const {categoryid} = useParams()

 
 


  const getProducts= async () => {

    const productCollection = categoryid ? query(collection(db ,'products'),where("category", "==", categoryid))

    :
    collection(db ,'products')
    const productSnapshot =  await getDocs(productCollection)
    const productList = productSnapshot.docs.map((doc)=>{

       let product = doc.data()
       product.id = doc.id
       return product

    })
    
    return productList
  }


  


  useEffect(() => {


    const getProduct = async () =>{
      try{
        const resLog = await getProducts()
        setlistClothes(resLog)
 

 }


 catch(error){
          
       console.log(error)
 }
 



    }

    getProduct()
    
    
  },[categoryid] )  // eslint-disable-line react-hooks/exhaustive-deps

  

 



  return (
    <div className='list-products'>
          <h2 className='ClotheName'>{article}</h2>
             
          <div className='ItemContainer'>
                
                <ItemList dataProducts={listClothes}/>
    
               
         </div>
               
         
             



          
    </div>


  )
}
