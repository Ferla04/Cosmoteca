import { FavBooks, Search } from './components'

function App () {
  return (
    <div className='text-white'>
      <h1 className='text-center text-5xl my-5 text-amber-300 font-semibold'>Bookstore Cosmoteca</h1>
      <article className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <FavBooks />
        <Search />
      </article>
    </div>
  )
}

export default App
