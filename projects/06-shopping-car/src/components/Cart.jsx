import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import "./styles/Cart.css"
import { useCart } from "../hooks/useCart";

function CartItem ({ thumbnail, price, title, quantity, addToCart, deleteCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price * quantity}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={deleteCart}>-</button>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, deleteCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        deleteCart={() => deleteCart(product)}
                        {...product}
                        />
                    ) )}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}