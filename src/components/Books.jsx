export function Books ({ books }) {
  return (
    <ul>
      {
        books?.map(book => (
          <li key={book.id}>
            <img src={book.image} alt='hey' />
            <h2>{book.title}</h2>
          </li>
        ))
      }
    </ul>
  )
}
