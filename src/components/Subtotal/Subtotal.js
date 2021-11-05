import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"

function Subtotal({ basket = [] }) {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` - ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order contains a gift
                        </small>
                    </>
                )}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal