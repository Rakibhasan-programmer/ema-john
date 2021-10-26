import React from 'react';
import useProducts from '../../hook/useProducts';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import ItemReview from '../ItemReview/ItemReview';
import { deleteFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    // getting function from hook
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key!==key);
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ItemReview
                        key={product.key}
                         product={product}
                         handleRemove={handleRemove}
                         >
                         </ItemReview>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;