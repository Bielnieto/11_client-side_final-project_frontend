import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
  },[])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;