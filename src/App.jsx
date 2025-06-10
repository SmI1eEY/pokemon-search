import './App.css'
import React, { useState } from 'react'
import Tabla from './components/Tabla.jsx'
import icon from "./assets/psyduck.png"

export default function App() {
  const [numnum, setNumnum] = useState("")
  const [dota, setDota] = useState(null)
  async function fetchData() {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numnum}`, {method: "GET"})
      if(!response.ok){
        throw new Error("request could not be fetched")
      }
      const data = await response.json()
      setDota(data)
      console.log(data)
    } catch {
      console.error("Error fetching data")
    }}
const name = numnum.charAt(0).toUpperCase() + numnum.slice(1)
return (
      <>
      <img src={icon} alt="Icon" />
      <h1>Pokemon Character</h1>
      <h2>Enter a Pokemon Name</h2>
        <input type="text" id='inpu' onChange={(e)=> setNumnum(e.target.value)} />
        <button type="submit"  id='fetc' onClick={fetchData}>Fetch</button>
      {dota && <Tabla dota={dota} />}
      </>
    )
}
