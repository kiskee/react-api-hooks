import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

//los hooks no pueden ir dentro de un if
//no puedes estar dentro de un while
//no puede cambiar su posicion siempre debe estar en el cuerpo de la funcion
// en un custom hook podemos llamar hooks como useState and UseEffect
// siempre debe devolver un objeto con su valor
// no se puede devolver el set no exporner el estado
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}