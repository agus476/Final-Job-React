import React from 'react'
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'



export  function ItemListContainer({article}) {

  const hat1 = {
        title: "Cristop grid 4G",
        price: 7629,
        img:"https://cdn.shopify.com/s/files/1/0305/3289/products/Palace_Summer_22_cap_tri_ferg_cripstop_nvy_1953_640x@2x.jpg?v=1655404370",
        stock: 25
        


  }

  const hat2 = {
    title: "Semi mosh pal hat white",
    price: 7162,
    img:"https://cdn.shopify.com/s/files/1/0305/3289/products/Palace_Summer_22_6_panel_mesh_wht_2858_640x@2x.jpg?v=1651820070",
    stock: 12
    


}



  return (
    <div className='list-products'>
          <h2 className='ClotheName'>{article}</h2>
             
        <div className='ItemContainer'>
                
               <ItemProduct data ={hat1} />
               <ItemProduct data ={hat2} />

           
          </div>
               
         
             



          
    </div>


  )
}
