import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../store/StateProvider';
import "./Subtotal.css"

const getCartTotal = (cart) => {
    let total = 0;
    cart.forEach(element => {
        total = total + element.price
    });

    return total;
}

function Subtotal() {
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
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
