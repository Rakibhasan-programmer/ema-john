import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    // total cost
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = (total + product.price*product.quantity);
        totalQuantity = totalQuantity+product.quantity;
    }
    let fixedTotal = total.toFixed(2);
    // shipping cost
    let shippingCost = total>0?20:0;
    // tax
    let tax = (((total+shippingCost)/100)*10);
    let fixedTax = tax.toFixed(2);
    //grandtotal
    let grandTotal = (total+shippingCost+tax);
    let fixedGrandTotal = grandTotal.toFixed(2);


    return (
        <div style={{paddingLeft:'110px'}}>
            <h3>Order Summary</h3>
            <p>Items ordered: {totalQuantity}</p>
            <p>
                <small>Shipping Cost: {shippingCost}</small> <br />
                <small>Total: {fixedTotal}</small> <br />
                <small>Tax: {fixedTax}</small>
            </p>
            <p>Grand total: {fixedGrandTotal}</p>
        </div>
    );
};

export default Cart;