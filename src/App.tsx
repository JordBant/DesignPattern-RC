import { useState } from 'react'
import { 
  SingletonDP,
  ProxyDP,
} from './containers'
import './App.css'

function App() {
  const pattern: string = localStorage.getItem("pattern") ?? "Singleton"

  return (
    <div className="App">
      <SingletonDP/>
      <ProxyDP/>
    </div>
  )
}


export default App