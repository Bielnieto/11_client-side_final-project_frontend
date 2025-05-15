
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
  },[])

  return (
    <h1>
      Books
    </h1>
  )
}

export default App
