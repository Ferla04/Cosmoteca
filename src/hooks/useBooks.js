import { useRef, useCallback, useEffect } from 'react'
import { searchBooks } from '../services/books'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeQuery, onError, onAddFavBook, onLoading, onDeleteFavBook } from '../store'
import { createNewListBooks } from '../utils/createNewListBooks'
// import { mockBooks } from '../mock/mockBooks'

export const useBooks = () => {
  const { books, loading, error, query, favBooks } = useSelector(state => state.bookStore)
  const dispatch = useDispatch()
  const previousSearch = useRef(query)

  const getBooks = useCallback(async (search = '') => {
    if (search === previousSearch.current || !search) return

    try {
      dispatch(onLoading())

      previousSearch.current = search
      let newBooks = await searchBooks({ search })
      // const newBooks = mockBooks

      if (favBooks.length > 0) {
        newBooks = createNewListBooks({ newBooks, favBooks })
      }
      dispatch(onChangeQuery({ books: newBooks, query: search }))
    } catch (e) {
      dispatch(onError({ error: e.message }))
    }
  }, [favBooks])

  useEffect(() => {
    getBooks()
  }, [])

  const likeBooks = (id) => {
    const indexBook = books.findIndex(book => book.id === id)

    if (indexBook < 0) {
      return dispatch(onDeleteFavBook({ id }))
    }
    dispatch(onAddFavBook({ indexBook }))
  }

  return {
    books,
    favBooks,
    getBooks,
    loading,
    error,
    likeBooks
  }
}
