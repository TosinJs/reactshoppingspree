import React, { useContext } from 'react';
import { ShopContext } from '../Context/context/ShopContext';
import Category from './Category';

const Categories = ({match}) => {
    const { shopItems } = useContext(ShopContext)
    const filteredShopItems = shopItems.filter((item) => item.type === match.params.section)
    return (
        <div id="category" className="category container">
        <h3>{match.params.section}</h3>
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