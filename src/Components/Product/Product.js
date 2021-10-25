import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, seller, price, stock, img, shipping, star } = props.item;
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
                <Rating initialRating={star} emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly>
                </Rating> <br /> <br />
                <button onClick={() => props.addToCart(props.item)} className='add-btn'>{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;