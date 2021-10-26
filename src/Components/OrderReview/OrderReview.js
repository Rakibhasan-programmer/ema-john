import React from 'react';
import useProducts from '../../hook/useProducts';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    // getting function from hook
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;