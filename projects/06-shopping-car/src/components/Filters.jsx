import { useId, useContext } from "react"
import "./styles/Filters.css"
import { FiltersContext } from "../context/filters"

export function Filters() {
    const {filters, setFilters} = useContext(FiltersContext)

    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangePrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }) )
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }) )
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={1000}
                    onChange={handleChangePrice}
                    value={filters.minPrice}
                />
                <output>${filters.minPrice}</output>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragrancias</option>
                </select>
            </div>

        </section>
    )
}