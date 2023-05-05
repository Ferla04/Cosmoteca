import { useRef, useCallback, useEffect } from 'react'
import { searchBooks } from '../services/books'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeQuery, onError, onLoading } from '../store'

export const useBooks = () => {
  const { books, loading, error, query } = useSelector(state => state.bookStore)
  const dispatch = useDispatch()
  const previousSearch = useRef(query)

  const getBooks = useCallback(async (search = '') => {
    if (search === previousSearch.current || !search) return

    try {
      dispatch(onLoading())

      previousSearch.current = search
      const newBooks = await searchBooks({ search })
      dispatch(onChangeQuery({ books: newBooks, query: search }))
    } catch (e) {
      dispatch(onError({ error: e.message }))
    }
  }, [])

  useEffect(() => {
    getBooks()
  }, [])

  return {
    books,
    getBooks,
    loading,
    error
  }
}
