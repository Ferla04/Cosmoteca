import { useRef, useState, useEffect, useCallback } from 'react'
import { searchBooks } from '../services/books'

export const useBooks = ({ search }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)

      previousSearch.current = search
      const newBooks = await searchBooks({ search })
      setBooks(newBooks)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getMovies(search)
  }, [])

  return {
    books,
    loading,
    error
  }
}
