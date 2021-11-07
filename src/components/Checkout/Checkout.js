import React from 'react'
import { useStateValue } from '../../store/StateProvider';
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_cart_col">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout_title">Your Shopping Cart</h2>
                    {cart.map(item =>
                        <CheckoutProduct key={item.id} product={item} />
                    )}
                </div>
            </div>
            <div className="checkout_price_col">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
