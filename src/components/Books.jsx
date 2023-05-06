import { useBooks } from '../hooks/useBooks'

export function Books ({ books }) {
  const { likeBooks } = useBooks()

  return (
    <ul>
      {
        books?.map(book => (
          <li key={book.id}>
            <img src={book.image} alt='hey' />
            <h2>{book.title}</h2>
            <button onClick={() => likeBooks(book.id)}>Fav</button>
          </li>
        ))
      }
    </ul>
  )
}
