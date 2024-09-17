import { useState } from 'react'
import Title from './Title'
import Length from './Length'
import Backwards from './Backwards'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <Length name={name} />
      <Backwards name={name} />
    </div>
  )
}

export default App
