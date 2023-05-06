import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'
import { Spinner } from './Spinner'

export function Search () {
  const { books, getBooks, loading } = useBooks()

  const onSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    getBooks(query)
  }

  return (
    <section>
      <form onSubmit={onSubmit} className='my-5 text-center'>
        <input placeholder='search a movie' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name='query' />
        <button className='md:mx-4 bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-3 md:m-0 px-5 py-2.5' type='submit'>Buscar</button>
      </form>

      {
        loading
          ? <Spinner />
          : <Books books={books} buttonText='Agregar Fav' />
      }
    </section>
  )
}
