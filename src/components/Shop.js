import React, { useContext } from 'react';
import { ShopContext } from '../Context/context/ShopContext';
import { homeFiles } from '../files/homefiles';
import Category from './Category';

const Shop = () => {
    const { shopItems } = useContext(ShopContext)
    let types = homeFiles.map((item) => item.name)
    return(
        <div className="shop container">
            {
            types.map((type, index) => {
                return (
                    <React.Fragment key={index}>
                    <h3>{type}</h3>
                    <div className="shop-row">
                        {
                        shopItems.map((item) => {
                            if(item.type === type && item.featured) {
                                return(
                                    <Category key={item.id} {...item}/>
                                )
                            }
                            return null}) 
                        }
                    </div>
                    </React.Fragment>
                )
            })
            }
        </div>
    )
}

export default Shop;