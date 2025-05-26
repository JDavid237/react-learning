import "./app.css"
import { useCallback, useEffect, useRef, useState } from "react"
import { useMovies } from "./hooks/useMovies"
import { Movies } from "./components/Movies"
import debounce from "just-debounce-it"

function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)


  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError("No se puede colocar una pelicula vacia")
      return
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero")
      return
    }

    if (search.length < 3) {
      setError("Escribe almenos 3 caracteres")
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }

}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({search})
    }, 500)
    , []
  )


  function handleSubmit(e) {
    e.preventDefault()
    getMovies(search)
  }

  const handleInput = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input onChange={handleInput} value={search} placeholder="Avengers, Star wars..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {
          loading ?
            <p>Cargando</p> :
            <Movies movies={movies} />
        }

      </main>
    </div>


  )

}

export default App