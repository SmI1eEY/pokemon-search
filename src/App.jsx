import './App.css'
import React, { useState, useRef, useEffect } from 'react'
import Tabla from './components/Tabla.jsx'
import icon from "./assets/psyduck.png"

export default function App() {
  const [pokeFound, setPokeFound] = useState(true)
  const [numnum, setNumnum] = useState("")
  const [dota, setDota] = useState(null)
  const resultRef = useRef(null)
  async function fetchData(e) {
    e.preventDefault()
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numnum}`, {method: "GET"})
      if(!response.ok){
        setPokeFound(false)
        throw new Error("request could not be fetched")
      }
      setPokeFound(true)
      const data = await response.json()
      setDota(data)
      console.log(data)
    } catch {
      console.error("Error fetching data")
    }}
const name = numnum.charAt(0).toUpperCase() + numnum.slice(1)
useEffect(() => {
  if (dota && resultRef.current) {
    resultRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [dota]);
return (
      <>
      <img src={icon} alt="Icon" />
      <h1>Pokemon Character</h1>
      <h2>Enter a Pokemon Name</h2>
      {!pokeFound && <h2 className='error' style={{ color: 'tomato' }}>Please enter a real Pokemon name</h2>}      
      <p style={{ fontStyle: 'italic', color: '#555', marginTop: '10px' }}>
        Page will smoothly scroll to the result after fetching Pokémon data.
      </p>      <form>
        <input type="text" id='inpu' onChange={(e)=> setNumnum(e.target.value)} />
        <button type="submit"  id='fetc' onClick={fetchData}>Fetch</button>
      </form>

      {dota && (
        <div ref={resultRef}>
          <Tabla dota={dota} />
        </div>
      )}
      </>
    )
}
