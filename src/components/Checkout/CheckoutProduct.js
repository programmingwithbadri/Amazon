import React from 'react'
import { useStateValue } from '../../store/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ product }) {
    const { id, image, title, price, rating, hideButton } = product;
    const [state, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id
        })
    }
    return (
        <div className='checkoutProduct' >
            <img className='checkoutProduct_image' src={image} alt="" />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
                {
                    !hideButton && (
                        <button onClick={removeFromCart}>Remove from Cart</button>
                    )
                }
            </div >
        </div >
    )
}

export default CheckoutProduct
