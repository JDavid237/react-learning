import { Products } from "./components/Products"
import { useFetch } from "./hooks/useFetch.js"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./../config"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CardProvider } from "./context/cart.jsx"


function App() {
  const {data, error, loading} = useFetch()

  const {filterProducts} = useFilters()

  const filterProduct = error ? [] : filterProducts(data)


  return (
    <CardProvider>
      <Header/>
      <Cart/>
      <Products products={filterProduct} error={error} loading={loading}/>
      {IS_DEVELOPMENT && <Footer/>}
    </CardProvider>
 
  )
}

export default App
