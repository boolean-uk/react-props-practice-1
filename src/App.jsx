import { useState } from 'react'

import  Title  from './title'
import  NameReverse  from './name-reversed'
import  NameLength from './nameLength.jsx'


function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />

      <NameLength name={name} />

      <NameReverse name={name} />
    </div>
  )
}

export default App
