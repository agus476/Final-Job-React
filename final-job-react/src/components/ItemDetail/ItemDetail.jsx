import React  from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ product }) => {
  const { title, price, img, stock } = product;

  

  return (
    <>
      <img src={img} alt="" />
      <div className="productDescription">
        <h2>{title}</h2>
        <span className="price"> ${price}</span>
        <span className="stock">Available stock = {stock}</span>

        
          <ItemCount
            
            productdata={product}
          />
      
      </div>
    </>
  );
};

export default ItemDetail;
