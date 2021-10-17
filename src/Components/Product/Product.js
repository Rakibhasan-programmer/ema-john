import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, seller, price, stock, img, shipping } = props.item;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h4 className='product-name'>Name: {name}</h4>
                <p>
                    <small>By: {seller}</small> <br />
                    <small>Price: {price}</small> <br />
                    <small>Shipping cost: {shipping}</small> <br />
                    <small>Only {stock} left in stock - order soon</small>
                </p>
                <button onClick={() => props.addToCart(props.item)} className='add-btn'>{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;