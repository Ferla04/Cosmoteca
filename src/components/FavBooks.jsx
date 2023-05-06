import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'

export function FavBooks () {
  const { favBooks } = useBooks()

  return (
    <section className=' md:border-r-[3px] md:border-dashed'>
      <h2 className='text-violet-400 text-center text-3xl font-semibold my-5'>Favoritos</h2>
      <Books books={favBooks} buttonText='Remover' />
    </section>
  )
}
