import React from "react";
import { useStateValue } from '../../store/StateProvider';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();
    console.log(state);
    const addProductToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating,
            }
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i} >🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addProductToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;