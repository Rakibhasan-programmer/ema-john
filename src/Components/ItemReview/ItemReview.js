import React from 'react';

const ItemReview = (props) => {
    const { name, price, quantity, key } = props.product;
    const {handleRemove} = props;
    return (
        <div>
            <div className='product'>
                <h4 className='product-name'>{name}</h4>
            </div>
            <div className="details" style={{ paddingBottom: '20px' }}>
                <p>
                    <small>Price: {price}</small> <br />
                    <small>Quantity: {quantity}</small>
                </p>
                <button onClick={() => handleRemove(key)} className='add-btn'> Remove Item </button>
            </div>
        </div>
    );
};

export default ItemReview;