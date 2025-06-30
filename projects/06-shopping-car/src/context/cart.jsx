import { useReducer } from "react";
import { CartContext } from "./cart";
import { reducer, initialStade } from "../reducers/cart";


function useCartReducer () {
    const [state, dispatch] = useReducer(reducer, initialStade)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const deleteCart = product => dispatch({
        type: 'DELETE_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    return {state, addToCart, deleteCart, clearCart, removeFromCart}
}

export function CardProvider({ children }) {
    const {state, addToCart, deleteCart, removeFromCart, clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            deleteCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}