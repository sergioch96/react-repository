import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}$?fontSize=50&fontColor=red`
export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // retrieve a random cat fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_URL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // retrieve a random cat image using the first three words of the fact
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Kitty app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using first three words for ${fact}`}
        />
      )}
    </main>
  )
}
