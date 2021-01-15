import React, { useContext } from 'react';
import {FaChevronLeft, FaChevronRight, FaTimes} from 'react-icons/fa'
import { ShopContext } from '../Context/context/ShopContext';
import * as ActionTypes from '../Context/reducers/ActionTypes';

const CartItem = ({cartItem}) => {
   const {name, price, image, id} = cartItem
   const {cart , dispatch} = useContext(ShopContext)
    
   const removeFromCart = (id) => {dispatch({
        type:ActionTypes.DELETE_FROM_CART, payload:id})}
   const addToCart = () => {
         dispatch({type:ActionTypes.ADD_TO_CART, payload:id})
     }
   const subFromCart = (item) => {
      dispatch({type:ActionTypes.SUB_FROM_CART, payload:item})
   }
     return(
        <>
        <img src={image} alt="added"/>
        <p>{name}</p>
        <p>
        <FaChevronLeft  className="icon" onClick={() => subFromCart(cartItem)} />
        <span className="num">{cart.filter((item) => item.id === id).length}</span>
        <FaChevronRight className="icon" onClick={() => addToCart(id)}/>
        </p>
        <p>N{price}</p>
        <FaTimes className="icon" onClick={() => removeFromCart(id)} />
        </>
     )
}

export default CartItem;