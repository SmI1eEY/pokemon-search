import './App.css'
import React, { useState } from 'react'

export default function App() {
  const [numnum, setNumnum] = useState("")
  const [dota, setDota] = useState(null)
  async function fetchData() {
    try{
      const response = await fetch(`https://thronesapi.com/api/v2/Characters/${numnum}`, {method: "GET"})
      if(!response.ok){
        throw new Error("request could not be fetched")
      }
      const data = await response.json()
      console.log(data)
      setDota(data)
    } catch {
      console.error("Error fetching data")
    }
}
return (
      <>
        <h1>Game of Thrones Character</h1>
        <p>Character ID: {numnum}</p>
        <input type="text" id='mukki' onChange={(e)=> setNumnum(e.target.value)} />
        <button type="submit" onClick={fetchData} id='fetc'>Fetch</button>
        {numnum === "" ? (
        <p>Please enter a character ID.</p>
        ) : numnum <= 0 || numnum > 53 ? (
        <p>Character ID must be between 1 and 53.</p>
        ) : (
        <p>Fetching data for character ID: {numnum}</p>
        )}
        {dota && <>
        <h2>{dota.fullName}</h2>
        <img src={dota.imageUrl} alt={dota.fullName} id='imu' />
        </>}
      </>
    )
}
