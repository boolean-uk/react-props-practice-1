import { useState } from 'react'
import NameLength from './NameLength'
import Backwards from './Backwards'
function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <h1 className="title">Welcome, {name}!</h1>
      <NameLength name={name}/>
      <Backwards name={name}/>
    </div>
  )
}

export default App
