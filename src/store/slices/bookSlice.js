import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    query: '',
    books: [],
    loading: false,
    error: null
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
    }
  }
})

export const { onChangeQuery, onLoading, onError } = bookSlice.actions
