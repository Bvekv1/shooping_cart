import React from 'react';
import '../css/styles.css';
import  shop from '../image/shopping-cart-outline-svgrepo-com.svg';

// const requestImageFile = require.context('../image', true, /\.png$/);

const ProductContainer = (props) =>{
    const items =props.product.map((item)=>{
        
        
         return(
             <div>
                 <div >
                 <img src={item.image}/>
                 </div>
                 <h3>{item.name}</h3>
                 <div className="price">
                     {item.price}
                 </div>
                 <button id="button"><img id="shop" src={shop}/>Add</button>
                
             </div>
         )
    });
   return(
       <div  className="cartdisplay">{items}</div>
   )
}


export default ProductContainer;

