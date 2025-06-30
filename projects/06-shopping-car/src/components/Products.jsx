import "./styles/Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./icons"
import { useCart } from "../hooks/useCart"

export function Products({ products, error, loading }) {
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
        {loading 
        ? <div className="loading"></div>
        : !error
                ? <ul>
                    {products.map(product => {
                        const isProductInCart = checkProductInCart(product)

                        return (
                            <li key={product.id}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                                        onClick={() => {
                                            isProductInCart ?
                                                removeFromCart(product) :
                                                addToCart(product)
                                        }}>
                                        {
                                            isProductInCart ?
                                                <RemoveFromCartIcon /> :
                                                <AddToCartIcon />
                                        }

                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                : <p>Ocurrio un error inesperado</p>}

        </main>
    )
}