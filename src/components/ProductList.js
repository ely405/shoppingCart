import React from 'react';
import { connect } from 'react-redux';

import { addToCartAction } from '../actionCreators';

import './ProductList.css';

const ProductList = (props) => {
    return (
      <div className='grid-container grid-2345'>
        <small className='p-03rm' id='productAdded__message'>Producto agregado</small>
        {props.products.map((product) =>
          <div id={`product-${product.id}`} className="product-container grid-item" key={product.id}>
            <div className='product__imgage-container over-hidden'>
              <img src={product.image} alt={product.name}  className='product__image'/>
            </div>
            <div className="p-03rm">
              <h5 className='product__name'>{product.name}</h5>
              <button className='product__button bg-main-color s-100 p-rel' onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}><i className='icon-dollar'/>{product.price} <i className='icon-shopping-cart'/></button>
            </div>
      </div>
        )}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    game: state.gameStatus,
  }
}

const mapDispatchToProps = dispatch => {
   return {
     addToCart(product) {
       dispatch(addToCartAction(product))
     }
   }
}

export { ProductList };
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
