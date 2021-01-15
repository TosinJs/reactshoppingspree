import React, { useContext } from 'react';
import { ShopContext } from '../Context/context/ShopContext';
import Category from './Category';

const Categories = ({match}) => {
    const { shopItems } = useContext(ShopContext)
    return (
        <div id="category" className="category container">
        <h3>{match.params.section}</h3>
        {
            shopItems.map((item) => {
              if (item.type === match.params.section) {
                  return (
                      <Category key={item.id} {...item} />
                  )
              }
              return(
                  <p>No Categories Yet</p>
              )
            })
        }
        </div>
    )
}

export default Categories;