import { useState } from 'react'
import {
  Singleton,
  ProxyComponent
} from './components'
import './App.css'

function App() {
  const pattern: string = localStorage.getItem("pattern") ?? "Singleton"

  return (
    <div className="App">
      <Singleton/>
      <ProxyComponent/>
    </div>
  )
}


export default App