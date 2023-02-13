import * as ActionTypes from './ActionTypes';

export const shopReducer = (state, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            const newCart = state.shopItems.filter((item) => item.id === action.payload)
            return {...state, cart:[...state.cart,...newCart ]}
        case ActionTypes.DELETE_FROM_CART:
            const leftCart = state.cart.filter((item) => item.id !== action.payload)
            return {...state, cart:leftCart}
        case ActionTypes.SUB_FROM_CART:
            const index = state.cart.lastIndexOf(action.payload)
            const subCart = state.cart.slice()
            subCart.splice(index,1)
            return {...state, cart:subCart}
        default:
            return state
    }
}