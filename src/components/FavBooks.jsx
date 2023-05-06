import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'

export function FavBooks () {
  const { favBooks } = useBooks()

  return (
    <section style={{ backgroundColor: 'red' }}>
      <Books books={favBooks} />
    </section>
  )
}
