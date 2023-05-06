import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    query: '',
    books: [],
    loading: false,
    error: null,
    favBooks: []
  },
  reducers: {
    onChangeQuery: (state, { payload }) => {
      state.query = payload.query
      state.books = payload.books
      state.loading = false
    },
    onLoading: (state) => {
      state.loading = true
      state.error = null
    },
    onError: (state, { payload }) => {
      state.loading = false
      state.payload = payload.error
    },
    onAddFavBook: (state, { payload: { indexBook } }) => {
      state.favBooks.push(state.books[indexBook])
      state.books = [
        ...state.books.slice(0, indexBook),
        ...state.books.slice(indexBook + 1)
      ]
    },
    onDeleteFavBook: (state, { payload }) => {
      state.favBooks = state.favBooks.filter(book => book.id !== payload.id)
    }
  }
})

export const { onChangeQuery, onLoading, onError, onAddFavBook, onDeleteFavBook } = bookSlice.actions
