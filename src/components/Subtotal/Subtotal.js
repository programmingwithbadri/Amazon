import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router';
import { getCartTotal } from '../../store/reducer';
import { useStateValue } from '../../store/StateProvider';
import "./Subtotal.css"

function Subtotal() {
    const navigate = useNavigate();
    const [{ cart = [] }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):
                            <strong>{` - ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order contains a gift
                        </small>
                    </>
                )}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} />
            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
