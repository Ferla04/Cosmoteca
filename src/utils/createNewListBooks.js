export const createNewListBooks = ({ newBooks, favBooks }) => {
  const idsBooks = favBooks.map(book => book.id)
  return newBooks.filter(book => !idsBooks.includes(book.id))
}
