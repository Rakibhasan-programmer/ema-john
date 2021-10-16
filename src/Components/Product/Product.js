import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, price, stock, img } = props.item;
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
                    <small>Only {stock} left in stock - order soon</small>
                </p>
                <button onClick={() => props.addToCart(props.item)} className='add-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;