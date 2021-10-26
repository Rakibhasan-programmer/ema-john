import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const { name, price, quantity } = props.product;
    return (
        <div>
            <div className='product'>
                <h4 className='product-name'>{name}</h4>
            </div>
            <div className="details">
                <p>
                    <small>Price: {price}</small>
                    <small>Quantity: {quantity}</small>
                </p>
                <button className='add-btn'> Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;