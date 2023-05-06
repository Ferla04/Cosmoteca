import { API_KEY, NO_IMAGE } from '../constantes'

export const searchBooks = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=${search}&maxResults=4`)
    const data = await response.json()
    const books = data.items

    return books?.map(({ id, volumeInfo }) => ({
      id,
      authors: volumeInfo.authors,
      title: volumeInfo.title,
      image: volumeInfo.imageLinks?.thumbnail ?? NO_IMAGE,
      year: volumeInfo.publisher
    }))
  } catch (error) {
    console.log(error)
    throw new Error('Error searching movies')
  }
}
