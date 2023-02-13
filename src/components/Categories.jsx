import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/context/ShopContext';
import Category from './Category';

const Categories = ({ match }) => {
    const { shopItems } = useContext(ShopContext)
    const { section } = useParams()
    const filteredShopItems = shopItems.filter((item) => item.type === section)
    return (
        <div id="category" className="category container">
        <h3>{section}</h3>
        {
            filteredShopItems.map((item) => {
                return (
                    <Category key={item.id} {...item} />
                )
            })
        }
        </div>
    )
}

export default Categories;