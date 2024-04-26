import { useState } from 'react'
import Title from './Title.jsx'
import NameReversed from './NameReversed.jsx'
import NameLength from './nameLength.jsx'


function App() {
  const [name] = useState('Nicolas')


  return (
    <div className="app">
      <Title name={name}/>
      <NameLength nameLength={name} letterCount={name}/>
      <NameReversed name={name} reversed={name}/>
    </div>
  )
}

export default App
