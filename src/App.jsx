import { useState } from 'react'
import Title from './Title'
import LenghtName from './NameLength'
import NameReversed from './NameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <LenghtName name={name} />
      <NameReversed name={name}/>
    </div>
  )
}

export default App
