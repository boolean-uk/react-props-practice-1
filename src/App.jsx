import { useState } from 'react'
import { Title } from './Title.jsx'
import { NameLength } from './nameLength.jsx'
import { NameReversed } from './NameReversed.jsx'


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
