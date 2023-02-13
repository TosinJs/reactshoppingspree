import React, { createContext, useEffect,  useReducer} from 'react';
import { generalFiles } from '../../files/generalfiles';
import { shopReducer } from '../reducers/ShopReducer';

export const ShopContext = createContext()

const getLocalData = () => {
    const localData = localStorage.getItem('cart')
    return localData ? JSON.parse(localData) : []
}

const ShopContextProvider = (props) => {

    const initialState = {shopItems:generalFiles, cart:getLocalData()}
    const [state, dispatch] = useReducer(shopReducer, initialState)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <ShopContext.Provider value={{...state, dispatch}}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;