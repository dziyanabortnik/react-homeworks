import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromCart, updateCartQuantity  } from '../../features/slice/cartSlice';
import './OrderPage.css';

const OrderPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleOrder = () => {
        alert('Order placed!');
    };

    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + (item.item.price || 0) * item.quantity;
    }, 0);

        return (
            <main>
                <div className="container wrapper">
                    <h1>Finish your order</h1>
                    <div className='order-list'>
                        {cartItems.map((cartItem) => (
                            <div className="order-item" key={cartItem.item.id}>
                                <img src={cartItem.item.img || '/default-image.jpg'} alt={cartItem.item.meal} className="order-img" />
                                <div className="order-details">
                                    <p>{cartItem.item.meal}</p>
                                    <p className="order-price">$ {(cartItem.item.price! * cartItem.quantity).toFixed(2)} USD</p>
                                </div>
                                <div className="order-quantity">
                                    <input type="number" min="1" className="order-qty-input"  placeholder="Qty"
                                        value={cartItem.quantity} 
                                        onChange={(e) => {
                                        const newQty = parseInt(e.target.value, 10);
                                        if (newQty > 0) {
                                            dispatch(updateCartQuantity({ id: cartItem.item.id, quantity: newQty }));
                                        }
                                    }}/>
                                    <button className="remove-btn" onClick={() => handleRemove(cartItem.item.id)}>X</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-address">
                        <div className="order-address-inputs">
                            <p>Street</p>
                            <input type="text" title="Street"/>
                        </div>
                        <div className="order-address-inputs">
                            <p>House</p>
                            <input type="text" title=" House"/>
                        </div>
                    </div>
                    <button onClick={handleOrder} className="order-button">Order</button>
                </div>
            </main>
        );
};

export default OrderPage;
