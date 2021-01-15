import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/context/ShopContext';
import { SVG_CROWN, SVG_CART } from '../files/svg1'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const { cart, shopItems } = useContext(ShopContext)
    const set = (arr,arr2) => {
        let index = []
        arr.map((item) => index.push(item.id))
        index= [...new Set(index)]
        return (arr2.filter((item) => index.includes(item.id)))
    }
    const cartSet = set(cart, shopItems)
    return (
        <>
        <nav className="nav container">
            <div className="nav-crown"><Link className="links" to="/">{SVG_CROWN}</Link></div>
            <ul className="nav-links">
                <li><Link to="/shop" className="links">Shop</Link></li>
                <li><Link to="/contact" className="links">Contact</Link></li>
            </ul>
            <div onClick={() => setToggle(!toggle)} className="nav-cart">
                {SVG_CART}<p>{cart.length}</p>
            </div>
        </nav>
        <div className={` ${toggle ? 'dropdown-shown dropdown' : 'none dropdown'}`}>
                <div className="dropdown-holder">
                {
                !cartSet.length ? <div className="empty-cart"><p>Your Cart is Empty</p></div> 
                :
                cartSet.map((item) => {
                    const {image, name, price, id} = item
                    return(
                        <div key={id} className="dropdown-card"> 
                            <img src={image} alt="cart item" />
                            <div>
                                <p>{name}</p>
                                <p>{cart.filter((item) => item.id === id).length} x N{price}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="btn">
                <Link className="links" to="/cart"><button>Go To Cart</button></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;