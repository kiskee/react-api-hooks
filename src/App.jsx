import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // Para recurar la cita al cargar la pagina
  /*
  useEffect(() => {
    getRandomFact().then(setFact) // abreviado
    //estas dos son lo mismo
    // getRandomFact().then(newFact=>setFact(newFact))
  }, [])
  */

  // manejo de botones para acutalizar el fact
  const handleClick = async () => {
    refreshFact()
  }

  /*
  el catch en el fecth entra directamente solo cuando ha habido un
  problema con la peticion NO con la respuesta
  */

  return (
    <>
       <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
    </main>
    </>
  )
}

export default App
