import React, { useContext } from 'react';
import * as ActionTypes from '../Context/reducers/ActionTypes';
import { ShopContext } from '../Context/context/ShopContext';

function Category({ name, image, price, id }) {
    const { dispatch } = useContext(ShopContext)

    const addToCart = () => {
        dispatch({type:ActionTypes.ADD_TO_CART, payload:id})
    }
    return (
        <div className="category-card">
            <div className="image-holder">
                <div className="image-container" style={
                {backgroundImage:`url(${image})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'}}>
                </div>
                <p onClick={() => addToCart(id)}>Add To Cart</p>
            </div>
            <div className="category-text">
                <p>{name}</p>
                <p>N{price}</p>
            </div>
        </div>
    )
}

export default Category;