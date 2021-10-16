import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total+product.price;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {props.cart.length}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;