import React, { useState} from 'react';
import css from './products.module.css';
import plane from '../../asseta/plane.jpg';
import { productsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react'





function Products() {

  const [parent ]= useAutoAnimate ()
  const [MenuProducts, setMenuProducts] = useState(productsData);

   const filter =( type)=>{
    setMenuProducts (productsData.filter((product)=>product.type === type))
   }


   
  return (
    <div className={css.container}>
      <img src={plane} alt='' />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts (productsData)} >All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li  onClick={()=>filter("conditioner")} >Conditioners</li>
          <li  onClick={()=>filter("foundation")} >Foundations</li>
        </ul>

        <div className={css.list} ref={parent} >
          {MenuProducts.map((product, i) => (
            <div className={css.product} key={i}>
            <div className='left-s'>
              <div className='name'>
                <span>{product.name}</span>
                <span>{product.detail}</span>
              </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
            </div>
            <img src={product.img} className='img-p'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
