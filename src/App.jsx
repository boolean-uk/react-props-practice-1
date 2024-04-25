import { useState } from 'react'
import { reverse } from './helpers'
import Title from './components/Title'
import NameLength from './components/NameLength'
import NameReversed from './components/NameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}></Title>
      <NameLength name={name}></NameLength>
      <NameReversed name={name} reverse={reverse}></NameReversed>
    </div>
  )
}

export default App
