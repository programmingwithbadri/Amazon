import React from 'react'
import { useStateValue } from '../../store/StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct';
import './Payment.css'

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout ({cart.length} items)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review your orders</h3>
                    </div>
                    <div className="payment_items">
                        {cart.map(item => <CheckoutProduct product={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
