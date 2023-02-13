import React, { useContext } from 'react';
import { ShopContext } from '../Context/context/ShopContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, shopItems } = useContext(ShopContext)
    let cartSet = [...new Set(cart)]
    const total = (arr) => {
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
           sum += arr[i].price
        }
        return sum
     }
     const set = (arr,arr2) => {
        let index = []
        arr.map((item) => index.push(item.id))
        index= [...new Set(index)]
        return (arr2.filter((item) => index.includes(item.id)))
    }
    cartSet = set(cart, shopItems)
    return (
        <div className="cart">
            <div className="cart-headers">
                <p>Product</p>
                <p>Description</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            <div className="cart-body-holder">
                {
                    !cartSet.length ? <div className="empty-cart"><p>Your Cart is Empty</p></div>
                    :
                    cartSet.map((cartItem) => {
                        const {id} = cartItem
                        return (
                            <div key={id} className="cart-body">
                            <CartItem cartItem={cartItem}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="cart-footer">
                <p>Total: N{total(cart)}</p>
                <p>
                    *Please use the following test credit card for payments*<br />
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </p>
                <button>Pay Now</button>
            </div>
        </div>
    )
}

export default Cart;