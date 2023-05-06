import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'

export function Search () {
  const { books, getBooks, loading } = useBooks()

  const onSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    getBooks(query)
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type='text' name='query' />
        <button type='submit'>Buscar</button>
      </form>

      {
        loading ? <p>Cargando...</p> : <Books books={books} buttonText='Add Fav' />
      }
    </section>
  )
}
