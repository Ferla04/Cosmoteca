import { useBooks } from '../hooks/useBooks'

export function Books ({ books, buttonText }) {
  const { likeBooks } = useBooks()

  return (
    <ul className='flex flex-wrap gap-6 w-11/12 m-auto lg:justify-start sm:justify-center grow'>
      {
        books?.map(book => (
          <li key={book.id} className='bg-slate-600 rounded-lg shadow w-52 relative'>
            <img className='rounded-t-lg w-full h-72 object-cover' src={book.image} alt={book.title} />
            <div className='flex flex-col px-3 py-2 text-center justify-between'>
              <h2 className='font-semibold text-emerald-500 text-ellipsis truncate'>{book.title}</h2>
              <p>Autores: {new Intl.ListFormat('es').format(book.authors)}</p>
              <button className={`${buttonText === 'Remover' ? 'bg-red-700 text-amber-300' : 'bg-amber-300 text-slate-700'} absolute right-2 top-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2`} onClick={() => likeBooks(book.id)}>{buttonText}</button>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
