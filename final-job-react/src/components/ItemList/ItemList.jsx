


import ItemProduct from "../ItemProduct/ItemProduct"



const ItemList = ({dataProducts}) =>{
   


    return(
        
           <>
           
           {dataProducts.map(product => <ItemProduct key ={product.id} data={product}/>)}
           </>
        

    )



}

export default ItemList