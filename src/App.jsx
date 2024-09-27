import { useState } from 'react'
import Title from './Components/title'
import NameLength from './Components/nameLength'
import NameReversed from './Components/nameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  )
}

export default App
